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
import { Groups} from './home/pages/groups/groups';
import { authGuard } from './guards/auth-guard';
import { guestOnlyGuard } from './guards/guest-only-guard';

const routes: Routes = [
  {path: "", component: Home, pathMatch: "full", canActivate:[guestOnlyGuard]},
  {path: "home", component: Home, pathMatch: "full", canActivate:[guestOnlyGuard]},
  {path: "login", component: Login, pathMatch: "full", canActivate:[guestOnlyGuard]},
  {path: "signup", component:Signup, canActivate:[guestOnlyGuard]},
  {path: "initialization", component: Initialization,canActivate: [authGuard]},
  {path: "main",component:Main, canActivate: [authGuard]},
  {path: "chats",component:Chats, canActivate: [authGuard]},
  {path: "events",component:Events, canActivate: [authGuard]},
  {path: "profile",component:Profile, canActivate: [authGuard]},
  {path: "groups",component:Groups, canActivate: [authGuard]},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
