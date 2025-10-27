import { Component, input, output, Signal } from '@angular/core';

interface Groups{
  name:string,
  image:string,
  city:string,
  description:string
}

@Component({
  selector: 'app-newgroupscard',
  standalone: false,
  templateUrl: './newgroupscard.html',
  styleUrl: './newgroupscard.scss'
})
export class Newgroupscard {

  groups=input<[{name: string; image:string; city:string; description:string}]>()

  refresh=output<void>()

}
