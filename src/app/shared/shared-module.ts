import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { HeaderLogout } from './components/header-logout/header-logout';



@NgModule({
  declarations: [
    Header,
    Footer,
    HeaderLogout],
  imports: [
    CommonModule
  ],
  exports: [HeaderLogout,
            Header
  ]
})
export class SharedModule { }
