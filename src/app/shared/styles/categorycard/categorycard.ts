import { Component,input,output } from '@angular/core';

interface Category {
  icon: string;
  title: string;}

@Component({
  selector: 'app-categorycard',
  standalone: false,
  templateUrl: './categorycard.html',
  styleUrl: './categorycard.scss'
})
export class Categorycard {


  categories = input<Category[]>([]);
  categorySelected = output<Category>();


}
