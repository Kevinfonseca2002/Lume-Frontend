import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CommonModule } from '@angular/common'; //Nos permite utilizar los modelos "NGMODELS no modulos" externos
import { FormsModule } from '@angular/forms';
import { PagesModule } from './features/auth/pages/pages-module';
import { SharedModule } from './shared/shared-module';
import { LumeModule } from './home/pages/lume-module';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    PagesModule,
    SharedModule,
    LumeModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
