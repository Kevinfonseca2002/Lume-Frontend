import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';



@NgModule({
  declarations: [
    Header,
    Footer],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
