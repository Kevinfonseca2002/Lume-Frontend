import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//Router Outlet pertenece a RouterModule
import { Login } from './features/auth/pages/login/login';
import { Home } from './home/pages/home/home';
import { Signup } from './features/auth/pages/signup/signup';
import { Initialization } from './home/pages/initialization/initialization';
import { Main } from './home/pages/main/main';
import { Chats} from './home/pages/chats/chats';
import { Events} from './home/pages/events/events';
import { Profile} from './home/pages/profile/profile';
import { Groups} from './home/pages/groups/groups'

const routes: Routes = [
  {path: "", component: Home, pathMatch: "full"},
  {path: "home", component: Home, pathMatch: "full"},
  {path: "login", component: Login, pathMatch: "full"},
  {path: "signup", component:Signup},
  {path: "initialization", component: Initialization},
  {path: "main",component:Main},
  {path: "chats",component:Chats},
  {path: "events",component:Events},
  {path: "profile",component:Profile},
  {path: "groups",component:Groups},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
