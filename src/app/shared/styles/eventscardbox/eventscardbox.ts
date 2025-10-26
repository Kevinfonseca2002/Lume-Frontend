import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-eventscardbox',
  standalone: false,
  templateUrl: './eventscardbox.html',
  styleUrl: './eventscardbox.scss'
})
export class Eventscardbox {

    events=input<{image:string; fecha:string;name:string}[]>([]);

    refresh=output<void>();

}
