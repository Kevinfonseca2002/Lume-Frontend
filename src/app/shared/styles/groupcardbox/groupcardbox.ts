import { Component, signal } from '@angular/core';

interface Groups{
  name:string;
  image:string;
  city:string;
}
@Component({
  selector: 'app-groupcardbox',
  standalone: false,
  templateUrl: './groupcardbox.html',
  styleUrl: './groupcardbox.scss'
})
export class Groupcardbox {

  groups = signal<Groups[]>([]);
  loading=false

  ngOnInit(){
    this.groupsCall();
  }

  groupsCall(){

    setTimeout(()=>{

      this.groups.set([
        {name:"Yankees", image:"../../../../assets/images/Party.jpg",city:"New York"},
        {name:"Scoopes", image:"../../../../assets/images/Foodies.jpg",city:"Tokyo"},
        {name:"Giggles", image:"../../../../assets/images/Lacandelaria.jpg",city:"Pasto"},
        {name:"BogTin", image:"../../../../assets/images/Travellers.jpg",city:"Leticia"},
        {name:"Happiers", image:"../../../../assets/images/Party.jpg",city:"Berlin"},
        {name:"Talk i out", image:"../../../../assets/images/Bookclub.jpg",city:"Oslo"},
        {name:"Yogers", image:"../../../../assets/images/Yoga.jpg",city:"Cali"},
      ])


    },1500)
  }

}
