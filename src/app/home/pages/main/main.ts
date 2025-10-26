import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth';


interface Category {
  icon: string;
  title: string;
}

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
  categories = signal<Category[]>([]);

  ngOnInit(){
    this.eventsInfo();
    this.loadCategories();
  }

  ////////////////////EVENTS/////////////////////
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

//////////////////////////CATEGORIES///////////////////////////////


  loadCategories() {
    this.loading=true;

    setTimeout(() => {
      this.categories.set([
        { icon: '../../../../assets/icons/bola-de-disco.png', title: 'Vida Nocturna' },
        { icon: 'assets/icons/musica.png', title: 'Música' },
        { icon: '../../../../assets/icons/pesa.png', title: 'Deportes' },
        { icon: '../../../../assets/icons/comer.png', title: 'Gastronomía' },
        { icon: '../../../../assets/icons/teatro.png', title: 'Arte y Cultura' },
        { icon: '../../../../assets/icons/playa.png', title: 'Vacaciones' }
      ]);
      this.loading=false;
    }, 1000);
  }

  onCategorySelected(category: Category) {
    console.log('Categoría seleccionada:', category);
    // Aquí puedes manejar la lógica cuando se selecciona una categoría
  }

  reloadCategories() {
    console.log('Recargando categorías...');
    this.loadCategories();
  }


    reloadUser() {
    this.auth.loadUser();
  }
}






