import { Injectable } from '@angular/core';


interface Products {
  image: string;
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
  products!: Products;

  //PRODUCTS//////////////////////////

  userChecker() {
    console.log( this.products);

    setTimeout(() => {
      // this.products = [
      //  ,
      //   {
      //     image: '../../../assets/images/Profile Pictures/pexels-carol-wd-1531174-3454298.jpg',
      //     user: 'Ana',
      //     ciudad: 'Bogota',
      //     signo: 'Tauro',
      //     personalidad: 'Paciente',
      //     interes: 'Lectura',
      //     descripcion: 'Me encanta leer novelas y poesia',
      //   },
      //   {
      //     image: '../../../assets/images/Profile Pictures/pexels-wesleydavi-7116213.jpg',
      //     user: 'Luis',
      //     ciudad: 'Cali',
      //     signo: 'Geminis',
      //     personalidad: 'Sociable',
      //     interes: 'Cine',
      //     descripcion: 'Disfruto de las peliculas y las series',
      //   },
      //   {
      //     image: '../../../assets/images/Profile Pictures/pexels-dziana-hasanbekava-7275385.jpg',
      //     user: 'Maria',
      //     ciudad: 'Barranquilla',
      //     signo: 'Cancer',
      //     personalidad: 'Empatica',
      //     interes: 'Viajes',
      //     descripcion: 'Amo viajar y conocer nuevas culturas',
      //   },
      //   {
      //     image: '../../../assets/images/Profile Pictures/pexels-ketut-subiyanto-4307869.jpg',
      //     user: 'Carlos',
      //     ciudad: 'Cartagena',
      //     signo: 'Leo',
      //     personalidad: 'Lider',
      //     interes: 'Deportes',
      //     descripcion: 'Practico futbol y baloncesto',
      //   },
      //   {
      //     image: '../../../assets/images/Profile Pictures/pexels-kiyan-mirzaei-2588568-4420634.jpg',
      //     user: 'Sofia',
      //     ciudad: 'Medellin',
      //     signo: 'Virgo',
      //     personalidad: 'Organizada',
      //     interes: 'Cocina',
      //     descripcion: 'Me gusta cocinar y probar nuevas recetas',
      //   },
      // ];
      this.products = {
          image: '../../../assets/images/Profile Pictures/pexels-amirvisuals-6274712.jpg',
          user: 'Kevin',
          ciudad: 'Medellin',
          signo: 'Aries',
          personalidad: 'Aventurero',
          interes: 'Musica',
          descripcion: 'Me gusta la musica y los deportes',
        };
      this.loading = false;
    }, 2000);
  console.log(this.products);

}

//CHATS//////////////////////////////


}

