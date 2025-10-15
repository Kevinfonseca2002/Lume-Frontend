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

  constructor(private authService: AuthService, private router: Router){}

  name="";
  address="";
  email="";
  password="";
  storeOrUser="";

  onSubmit(){

    const ok =this.authService.signUpChecker(this.name, this.address, this.email, this.password, this.storeOrUser)

    if(ok){
      this.router.navigate(["/main"])
    }
    else{
      alert("Fill up every empty field")
    }
  }



}
