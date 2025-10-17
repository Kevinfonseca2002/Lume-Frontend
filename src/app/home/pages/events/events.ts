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
        {imagen:"../../../../assets/images/Macetas.jpg", titulo:"Taller de Macetas", fecha:"12/08/2024", descripcion:"Aprende a crear tus propias macetas decorativas utilizando materiales reciclados. ¡Dale vida a tus plantas con estilo!"},
        {imagen:"../../../../assets/images/Lacandelaria.jpg", titulo:"Visita a La Candelaria", fecha:"20/08/2024", descripcion:"Explora el corazón histórico de Bogotá con un recorrido guiado por La Candelaria. Descubre su arquitectura colonial y su vibrante cultura."},
        {imagen:"../../../../assets/images/pexels-rdne-5779653.jpg", titulo: "Foodies", fecha: "25/08/2024", descripcion: "Únete a nosotros para una experiencia culinaria única en la que exploraremos sabores locales e internacionales. ¡No te lo pierdas!"},
        {imagen:"../../../../assets/images/pexels-nubikini-386000.jpg", titulo: "Travellers", fecha: "30/08/2024", descripcion: "Comparte tus experiencias de viaje y descubre nuevos destinos con otros entusiastas de los viajes. ¡Inspírate y planifica tu próxima aventura!"},
      ]
      this.loading=false;
    }, 2000);

  }

}
