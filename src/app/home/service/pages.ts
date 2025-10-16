import { Injectable } from '@angular/core';


interface Products {
  user: string;
  ciudad: string;
  signo: string;
  personalidad: string;
  interes: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  loading = true;
  products!: Products[];

  userChecker() {
    setTimeout(() => {
      this.products = [
        {
          user: 'Kevin',
          ciudad: 'Medellin',
          signo: 'Aries',
          personalidad: 'Aventurero',
          interes: 'Musica',
          descripcion: 'Me gusta la musica y los deportes',
        },
        {
          user: 'Ana',
          ciudad: 'Bogota',
          signo: 'Tauro',
          personalidad: 'Paciente',
          interes: 'Lectura',
          descripcion: 'Me encanta leer novelas y poesia',
        },
        {
          user: 'Luis',
          ciudad: 'Cali',
          signo: 'Geminis',
          personalidad: 'Sociable',
          interes: 'Cine',
          descripcion: 'Disfruto de las peliculas y las series',
        },
        {
          user: 'Maria',
          ciudad: 'Barranquilla',
          signo: 'Cancer',
          personalidad: 'Empatica',
          interes: 'Viajes',
          descripcion: 'Amo viajar y conocer nuevas culturas',
        },
        {
          user: 'Carlos',
          ciudad: 'Cartagena',
          signo: 'Leo',
          personalidad: 'Lider',
          interes: 'Deportes',
          descripcion: 'Practico futbol y baloncesto',
        },
        {
          user: 'Sofia',
          ciudad: 'Medellin',
          signo: 'Virgo',
          personalidad: 'Organizada',
          interes: 'Cocina',
          descripcion: 'Me gusta cocinar y probar nuevas recetas',
        },
      ];
      this.loading = false;
    }, 2000);

}
}
