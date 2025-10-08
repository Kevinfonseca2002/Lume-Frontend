import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core'; //OnInit ejecuta codigo justo cuando un componente es iniciado en HTML

@Component({
  selector: "header-ciudades",
  templateUrl: "../components/header/header.html"
})

@Injectable({
  providedIn: 'root'
})
export class Header {

  constructor(private http:HttpClient){}

ngOnInit(){


}

}
