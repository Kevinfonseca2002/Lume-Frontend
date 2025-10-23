import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({// El metodo Component o NGModule naturalmente detecta que tiene que trabajar de la mano con la class
  selector: 'app-login', //Selector del componente de login
  standalone: false,
  templateUrl: './login.html', // Esta es la vista de login
  styleUrl: './login.scss' // Los estilos de login
})
export class Login { //La clase es necesaria

  email= ""; //Parametro de la clase
  password="";//Parametro de la clase
  isLoggedIn=false;

  constructor( //injecta cosas fuera de la clase, que fue importado.
    private router: Router,
    private authService:AuthService
  ){}

  ngOnInit(){
    const loggedIn = this.authService.isLoggedIn();
    if(loggedIn){
      this.isLoggedIn=true;
      this.router.navigate(["/main"]);
    }
  }//Cuando el componente se inicia, ejecuta esto

  onSubmit(){ //Envia informacion, si no esta  un campo lleno, ejecuta alert

  const ok = this.authService.login(this.email, this.password); // Provee al constructor con la informacion que traemos con ngModel "email, password" y esta la valida con el methodo de loginMock y este returna booleano

  if(ok){
    this.isLoggedIn=true;
    this.router.navigate(["/main"]); //
  }else{
    alert("Credenciales invalidas")
  }
  }
  logout(){ //Falta boton de logout en el html
    this.authService.logout();
    this.isLoggedIn=false
  }

}
