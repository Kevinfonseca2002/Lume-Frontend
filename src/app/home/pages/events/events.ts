import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {


}


@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events {

  loading=true;
  events: Events[]=[];

  ngOnInit(){

  }

}
