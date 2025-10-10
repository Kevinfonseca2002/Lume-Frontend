import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//Router Outlet pertenece a RouterModule
import { Login } from './features/auth/pages/login/login';
import { Home } from './home/pages/home/home';

const routes: Routes = [
  {path: "", component: Home, pathMatch: "full"},
  {path: "home", component: Home, pathMatch: "full"},
  {path: "login", component: Login, pathMatch: "full"},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
