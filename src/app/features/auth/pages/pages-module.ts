import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';
import { Signup } from './signup/signup';



@NgModule({
  declarations: [Login, Signup],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
