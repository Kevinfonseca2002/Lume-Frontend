import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';
import { SharedModule } from '../../shared/shared-module';
import { Initialization} from './initialization/initialization';



@NgModule({
  declarations: [Home, Initialization],
  imports: [
    CommonModule,
    SharedModule

  ]
})
export class LumeModule {}
