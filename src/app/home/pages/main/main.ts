import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth';


@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

  auth= inject(AuthService);

  loading=false
  events=signal<{image: string; fecha: string; name: string}[]>([]);

  ngOnInit(){
    this.eventsInfo()
  }

  eventsInfo(){

    setTimeout(()=>{

      this.loading=true;
      this.events.set(
      [
        {image:"../../../../assets/images/Wine.jpg",fecha:"Jul 4 6:00pm",name: "Tomar Vino"},
        {image:"../../../../assets/images/Blackswan.jpg", fecha:"Dec 24 4:00pm", name: "Blackswan"},
        {image:"../../../../assets/images/Macetas.jpg", fecha:"Sep 24 1:00pm", name: "Coloreando Macetas"},
        {image:"../../../../assets/images/Party.jpg", fecha:"Jul 12 8:00pm", name: "Color´s Party"},
        {image:"../../../../assets/images/Yoga.jpg", fecha:"Oct 24 4:00pm", name: "Yoga Class"}
      ]
      )
      this.loading=false
    },1500)
  }


    reloadUser() {
    this.auth.loadUser();
  }



}
