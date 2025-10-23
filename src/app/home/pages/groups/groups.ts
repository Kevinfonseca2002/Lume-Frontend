import { Component } from '@angular/core';


@Component({
  selector: 'app-groups',
  standalone: false,
  templateUrl: './groups.html',
  styleUrl: './groups.scss'
})
export class Groups {
  image!: string;
  name!: string;
  city!: string;
  currentSlideIndex = 0;
  favorites: Set<number> = new Set();

}
