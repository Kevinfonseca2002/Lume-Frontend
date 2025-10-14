import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';
import { SharedModule } from '../../shared/shared-module';
import { Initialization} from './initialization/initialization';
import { Main } from './main/main';
import { Chats } from './chats/chats';
import { Events } from './events/events';
import { Profile } from './profile/profile';
import { Groups } from './groups/groups';



@NgModule({
  declarations: [Home, Initialization, Main, Chats, Events, Profile, Groups],
  imports: [
    CommonModule,
    SharedModule

  ]
})
export class LumeModule {}
