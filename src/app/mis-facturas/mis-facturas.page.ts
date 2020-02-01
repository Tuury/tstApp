import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-facturas',
  templateUrl: './mis-facturas.page.html',
  styleUrls: ['./mis-facturas.page.scss'],
})
export class MisFacturasPage implements OnInit {

  facturas: any = [
    {fecha: '21-10-19', codigo: '0001-00012345', costo: '$24000'},
    {fecha: '21-10-19', codigo: '0001-00012345', costo: '$24000'},
    {fecha: '21-10-19', codigo: '0001-00012345', costo: '$24000'},
    {fecha: '21-10-19', codigo: '0001-00012345', costo: '$24000'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
