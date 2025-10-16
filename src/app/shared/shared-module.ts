import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { HeaderLogout } from './components/header-logout/header-logout';
import { Eventscardbox } from './styles/eventscardbox/eventscardbox';
import { Groupcardbox } from './styles/groupcardbox/groupcardbox';
import { Categorycard } from './styles/categorycard/categorycard';
import { Newgroupscard } from './styles/newgroupscard/newgroupscard';
import { AppRoutingModule } from "../app-routing-module";



@NgModule({
  declarations: [
    Header,
    Footer,
    HeaderLogout,
    Eventscardbox,
    Groupcardbox,
    Categorycard,
    Newgroupscard,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
],
  exports: [HeaderLogout,
            Header,
            Footer,
            Eventscardbox,
            Groupcardbox,
            Categorycard,
            Newgroupscard
  ]
})
export class SharedModule { }
