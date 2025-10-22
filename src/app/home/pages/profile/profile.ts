import { Component, inject, input, output } from '@angular/core';
import { PagesService } from '../../service/pages';


@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile{
  private pagesService= inject(PagesService);

  products = this.pagesService.products;

ngOnInit(): void {
    this.pagesService.userChecker();

  }

  user : string= this.products.user;
  image : string= this.products.image;
  ciudad : string= this.products.ciudad;
  signo : string= this.products.signo;
  personalidad : string= this.products.personalidad;
  interes : string= this.products.interes;
  descripcion : string= this.products.descripcion;

  editOn = false;



  ///PERFILES//////////////////////




  ///BOTONES//////////////////////

editProfile(): void {

    this.editOn = true;
  }

  cancelEdit(): void {

    this.editOn = false;
  }

}
