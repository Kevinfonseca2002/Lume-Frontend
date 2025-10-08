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

  constructor( //injecta cosas fuera de la clase, que fue importado.
    private router: Router,
    private authService:AuthService
  ){}

  onSubmit(){ //Envia informacion, si no esta  un campo lleno, ejecuta alert
    if(!this.email||!this.password){
      alert("Please fill up every empty field.")
      return;
    }

  const ok = this.authService.loginMock(this.email, this.password); //this lo usamos para utilizar  las clases externas, si no lo colocamos es como darle ese valor pero sin utilizar

  if(ok){
    this.router.navigate(["/home"]); //
  }else{
    alert("Credenciales invalidas")
  }
  }


}
