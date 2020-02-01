import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-mis-pedidos',
    templateUrl: './mis-pedidos.page.html',
    styleUrls: ['./mis-pedidos.page.scss'],
})
export class MisPedidosPage implements OnInit {


    pedidos: any = [
        {fecha: '21-10-19', cantidad: 20, costo: '$24000'},
        {fecha: '21-10-19', cantidad: 20, costo: '$24000'},
        {fecha: '21-10-19', cantidad: 20, costo: '$24000'},
        {fecha: '21-10-19', cantidad: 20, costo: '$24000'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
