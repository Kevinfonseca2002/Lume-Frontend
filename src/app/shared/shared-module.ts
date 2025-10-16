import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { HeaderLogout } from './components/header-logout/header-logout';
import { Eventscardbox } from './styles/eventscardbox/eventscardbox';
import { Groupcardbox } from './styles/groupcardbox/groupcardbox';



@NgModule({
  declarations: [
    Header,
    Footer,
    HeaderLogout,
    Eventscardbox,
    Groupcardbox,
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderLogout,
            Header,
            Footer,
            Eventscardbox,
            Groupcardbox
  ]
})
export class SharedModule { }
