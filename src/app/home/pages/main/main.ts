import { Component, inject, signal, OnInit } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth';

interface Category {
  icon: string;
  title: string;
}

interface Group {
  image: string;
  name: string;
  city: string;
  description: string;
}

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main implements OnInit {

  auth = inject(AuthService);

  loading = signal<boolean>(false); // ← CAMBIO: debe ser signal
  groups = signal<Group[]>([]);
  events = signal<{image: string; fecha: string; name: string}[]>([]);
  categories = signal<Category[]>([]);

  ngOnInit() {
    this.eventsInfo();
    this.loadCategories();
    this.loadGroups();
  }

  ////////////////////EVENTS/////////////////////
  eventsInfo() {
    this.loading.set(true); // ← CAMBIO: usar .set()

    setTimeout(() => {
      this.events.set([
        {image: "../../../../assets/images/Wine.jpg", fecha: "Jul 4 6:00pm", name: "Tomar Vino"},
        {image: "../../../../assets/images/Blackswan.jpg", fecha: "Dec 24 4:00pm", name: "Blackswan"},
        {image: "../../../../assets/images/Macetas.jpg", fecha: "Sep 24 1:00pm", name: "Coloreando Macetas"},
        {image: "../../../../assets/images/Party.jpg", fecha: "Jul 12 8:00pm", name: "Color´s Party"},
        {image: "../../../../assets/images/Yoga.jpg", fecha: "Oct 24 4:00pm", name: "Yoga Class"}
      ]);

      // Solo cambiar loading después de cargar todo
      this.checkAllLoaded();
    }, 1500);
  }

  //////////////////////////CATEGORIES///////////////////////////////
  loadCategories() {
    setTimeout(() => {
      this.categories.set([
        { icon: '../../../../assets/icons/bola-de-disco.png', title: 'Vida Nocturna' },
        { icon: '../../../../assets/icons/musica.png', title: 'Música' },
        { icon: '../../../../assets/icons/pesa.png', title: 'Deportes' },
        { icon: '../../../../assets/icons/comer.png', title: 'Gastronomía' },
        { icon: '../../../../assets/icons/teatro.png', title: 'Arte y Cultura' },
        { icon: '../../../../assets/icons/playa.png', title: 'Vacaciones' }
      ]);

      this.checkAllLoaded();
    }, 1000);
  }

  loadGroups() {
    setTimeout(() => {
      this.groups.set([
        {
          image: 'assets/images/Running.jpg',
          name: 'Running por el mundo',
          city: 'Bogotá',
          description: 'Queremos que nuestros miembros sean personas activas y con muchas ganas de recorrer el mundo a pie!'
        },
        {
          image: 'assets/images/yoga.jpg',
          name: 'Yoga al amanecer',
          city: 'Medellín',
          description: 'Únete a nosotros para practicar yoga al aire libre y comenzar el día con energía positiva.'
        },
        {
          image: 'assets/images/cycling.jpg',
          name: 'Ciclismo urbano',
          city: 'Cali',
          description: 'Exploramos la ciudad en bicicleta todos los fines de semana. ¡Aventura garantizada!'
        },
        {
          image: 'assets/images/hiking.jpg',
          name: 'Senderismo extremo',
          city: 'Manizales',
          description: 'Conquistamos montañas y disfrutamos de paisajes increíbles en cada salida.'
        }
      ]);

      this.checkAllLoaded();
    }, 1500);
  }

  // Método auxiliar para verificar si todo cargó
  private checkAllLoaded() {
    if (this.events().length > 0 &&
        this.categories().length > 0 &&
        this.groups().length > 0) {
      this.loading.set(false);
    }
  }

  onCategorySelected(category: Category) {
    console.log('Categoría seleccionada:', category);
  }

  reloadCategories() {
    console.log('Recargando categorías...');
    this.loadCategories();
  }

  onGroupEvents(group: Group) {
    console.log('Ver eventos de:', group.name);
  }

  onGroupSignup(group: Group) {
    console.log('Unirse al grupo:', group.name);
  }

  reloadUser() {
    this.auth.loadUser();
  }
}
