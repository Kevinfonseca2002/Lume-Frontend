import { Component } from '@angular/core';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  price: number;
  tags: string[];
}
@Component({
  selector: 'app-groups',
  standalone: false,
  templateUrl: './groups.html',
  styleUrl: './groups.scss'
})
export class Groups {
  image!: string;
  name!: string;
  city!: string;
  currentSlideIndex = 0;
  favorites: Set<number> = new Set();


    getSlideProgress(index: number): number {
    return index === this.currentSlideIndex ? 100 : 0;
  }

    toggleFavorite(id: number) {
    if (this.favorites.has(id)) {
      this.favorites.delete(id);
    } else {
      this.favorites.add(id);
    }
  }

  isFavorite(id: number): boolean {
    return this.favorites.has(id);
  }

  shareSlide(slide: Slide) {
  console.log('Compartiendo:', slide.title);
  alert(`Compartiendo: ${slide.title}`);
  }
}
