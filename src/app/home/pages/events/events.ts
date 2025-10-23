import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  imagen: string;
  titulo: string;
  fecha: string;
  descripcion: string;
}
@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events {

  loading=true;
  events!: Event[];

  ngOnInit(){
    setTimeout(() => {
      this.events=[
        {imagen:"../../../../assets/images/Macetas.jpg", titulo:"Taller de Macetas", fecha:"Jun 17 9:00am", descripcion:"Aprende a crear tus propias macetas decorativas utilizando materiales reciclados. ¡Dale vida a tus plantas con estilo!"},
        {imagen:"../../../../assets/images/Lacandelaria.jpg", titulo:"Visita a La Candelaria", fecha:"Dec 20 4:00 pm", descripcion:"Explora el corazón histórico de Bogotá con un recorrido guiado por La Candelaria. Descubre su arquitectura colonial y su vibrante cultura."},
        {imagen:"../../../../assets/images/pexels-rdne-5779653.jpg", titulo: "Foodies", fecha: "Oct 25 7:00pm", descripcion: "Únete a nosotros para una experiencia culinaria única en la que exploraremos sabores locales e internacionales. ¡No te lo pierdas!"},
        {imagen:"../../../../assets/images/pexels-nubikini-386000.jpg", titulo: "Travellers", fecha: "Nov 30 6:00am", descripcion: "Comparte tus experiencias de viaje y descubre nuevos destinos con otros entusiastas de los viajes. ¡Inspírate y planifica tu próxima aventura!"},
        {imagen:"../../../../assets/images/Bookclub.jpg", titulo: "Book Club", fecha: "Sep 15 5:00pm", descripcion: "Únete a nuestro club de lectura mensual donde discutiremos una variedad de géneros literarios."},
        {imagen:"../../../../assets/images/Yoga.jpg", titulo: "Yoga al Aire Libre", fecha: "Aug 10 7:00am", descripcion: "Comienza tu día con una sesión revitalizante de yoga al aire libre en el parque central." },
      ]
      this.loading=false;
    }, 2000);

  }

}
