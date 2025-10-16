import { Component, input, output } from '@angular/core';
import { PagesService } from '../../service/pages';


@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  user !: any;
  constructor(private pagesService: PagesService) {}

  ngOnInit() {
    this.user = this.pagesService.userChecker();
  }

}
