import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {

  step: "choose"|"user"|"store"="choose"

  name="";
  address="";
  email="";
  password="";
  nit="";

  loading=false;

    constructor(private authService: AuthService, private router: Router){}

select(type:"user"|"store"){
  this.step=type
}

submitUser(){
  if(!this.name|| !this.address || !this.email || !this.password )return alert ("Blankspaces must be all filled up");

  this.loading=true;

  const ok = this.authService.register({name: this.name, address: this.address, email:this.email, password: this.password, type:"user"});

  setTimeout(()=>{ this.loading=false;ok ?  this.router.navigate(["/main"]):alert("Unexpected error when signing up")},1000)

}

submitStore(){
  if( !this.email || !this.password || !this.nit) return alert ("Blankspaces must be all filled up.");
  this.loading=true;
  const ok = this.authService.register({name: this.name, address: this.address, email:this.email, password: this.password, type:"store"});

  setTimeout(() => { this.loading = false; ok ? this.router.navigate(['/main']) : alert('Unexpected error when signing up'); }, 1000);
}



}
