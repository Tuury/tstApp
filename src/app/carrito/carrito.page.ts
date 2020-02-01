import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  products: any = [
    {cod: 4020, nombre: 'Campana de pared' , cantidad: 5, precio: 2500},
    {cod: 4021, nombre: 'Caños de hierro' , cantidad: 5, precio: 100},
    {cod: 4022, nombre: 'Manguera' , cantidad: 5, precio: 250},
    {cod: 4023, nombre: 'lona' , cantidad: 5, precio: 1200},
  ];


  constructor() { }

  ngOnInit() {
  }

}
