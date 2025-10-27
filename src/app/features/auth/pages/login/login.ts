import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({// El metodo Component o NGModule naturalmente detecta que tiene que trabajar de la mano con la class
  selector: 'app-login', //Selector del componente de login
  standalone: false,
  templateUrl: './login.html', // Esta es la vista de login
  styleUrl: './login.scss' // Los estilos de login
})
export class Login { //La clase es necesaria

  email= ""; //Parametro de la clase
  password="";//Parametro de la clase
  loading=false;

  constructor( //injecta cosas fuera de la clase, que fue importado.
    private router: Router,
    private auth:AuthService
  ){}

  onSubmit(){ //Envia informacion, si no esta  un campo lleno, ejecuta alert
    if(!this.email|| !this.password) return alert(
      "Blankspaces must be all filled up"
    )
    this.loading=true;
    const ok= this.auth.login(this.email, this.password);
    setTimeout(()=>{
      this.loading=false;
      ok ? this.router.navigate(["/main"]):alert("Wrong Credentials")
    },1200);
  }
  logout(){ //Falta boton de logout en el html
    this.auth.logout();
  }

}
