import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//Router Outlet pertenece a RouterModule
import { Login } from './features/auth/pages/login/login';

const routes: Routes = [
  {path: "login", component: Login, pathMatch: "full"},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
