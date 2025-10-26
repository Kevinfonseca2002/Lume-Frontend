import { Component, inject } from '@angular/core';
interface Group {
  image: string,
  name: string,
  city: string

}

@Component({
  selector: 'app-groups',
  standalone: false,
  templateUrl: './groups.html',
  styleUrl: './groups.scss'
})
export class Groups {

  groups!:Group[];
  currentSlideIndex = 0;
  loading=false
  favorites: Set<number> = new Set();

  ngOnInit(){
    setTimeout(()=>{
      this.loading=true;
      this.groups=[
        {image:"../../../../assets/images/Bookclub.jpg", name:"Bookclub",city:"Bogotá"},
        {image:"../../../../assets/images/Macetas.jpg", name:"Coloreando Macetas",city:"Cali"},
        {image:"../../../../assets/images/Running.jpg", name:"Runners",city:"Leticia"},
        {image:"../../../../assets/images/Lacandelaria.jpg", name:"Pastoures",city:"Pasto"},
        {image:"../../../../assets/images/Yoga.jpg", name:"Yoga",city:"Paris"},
        {image:"../../../../assets/images/Travellers.jpg", name:"Travellers",city:"Oslo"},
        {image:"../../../../assets/images/Foodies.jpg", name:"Foodies",city:"Taiwan"},
        {image:"../../../../assets/images/Party.jpg", name:"Partiers",city:"Berlin"}
      ]
      this.loading=false
    },1500)

  }

}
