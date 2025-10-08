import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CommonModule } from '@angular/common'; //Nos permite utilizar los modelos "NGMODELS no modulos" externos
import { FormsModule } from '@angular/forms';
import { PagesModule } from './features/auth/pages/pages-module';
import { Home } from './home/pages/home/home';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [
    App,
    Home,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    PagesModule,
    SharedModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
