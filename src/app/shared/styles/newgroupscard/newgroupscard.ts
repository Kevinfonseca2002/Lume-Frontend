import { Component, input, output } from '@angular/core';

interface Group {
  image: string;
  name: string;
  city: string;
  description: string;
}

@Component({
  selector: 'app-newgroupscard',
  standalone: false,
  templateUrl: './newgroupscard.html',
  styleUrl: './newgroupscard.scss'
})
export class Newgroupscard {
  groups = input<Group[]>([]);
  onEvents = output<Group>();
  onSignup = output<Group>();

  handleEvents(group: Group) {
    this.onEvents.emit(group);
  }

  handleSignup(group: Group) {
    this.onSignup.emit(group);
  }
}

