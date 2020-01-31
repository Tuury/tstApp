import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.page.html',
    styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

    header1 = 'Coccion';
    header2 = 'Campana Pared';

    productos = [
        {
            nombre: 'Cubre caño Nihuil-Puelo (48 cm)',
            codigo: '400-90',
            precio: '2500$'
        },
        {
            nombre: 'Perforadora',
            codigo: '400-12',
            precio: '4500$'
        },
        {
            nombre: 'Cubre caño Nihuil-Puelo (48 cm)',
            codigo: '400-90',
            precio: '2500$'
        },
        {
            nombre: 'Perforadora',
            codigo: '400-12',
            precio: '4500$'
        }
    ];

    constructor(public alertController: AlertController) {
    }

    ngOnInit() {
    }

    async opcionesHeader1() {
        const alert = await this.alertController.create({
            inputs: [
                {
                    type: 'radio',
                    label: 'Coccion',
                    value: 'value1',
                    handler: (v) => {
                        this.header1 = v.label;
                        alert.dismiss();
                    }
                },
                {
                    type: 'radio',
                    label: 'Ventilacion',
                    value: 'value2',
                    handler: (v) => {
                        this.header1 = v.label;
                        alert.dismiss();
                    }

                },
                {
                    type: 'radio',
                    label: 'Hogar',
                    value: 'value3',
                    handler: (v) => {
                        this.header1 = v.label;
                        alert.dismiss();
                    }
                }
            ]
        });
        await alert.present();
    }

    async opcionesHeader2() {
        const alert = await this.alertController.create({
            inputs: [
                {
                    type: 'radio',
                    label: 'Coccion',
                    value: 'value1',
                    handler: (v) => {
                        this.header2 = v.label;
                        alert.dismiss();
                    }
                },
                {
                    type: 'radio',
                    label: 'Ventilacion',
                    value: 'value2',
                    handler: (v) => {
                        this.header2 = v.label;
                        alert.dismiss();
                    }

                },
                {
                    type: 'radio',
                    label: 'Hogar',
                    value: 'value3',
                    handler: (v) => {
                        this.header2 = v.label;
                        alert.dismiss();
                    }
                }
            ]
        });
        await alert.present();
    }

    async agregarProducto(nombre: string) {
        const alert = await this.alertController.create({
            header: 'Agregar',
            message: nombre,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        console.log('Confirm Okay');
                    }
                }
            ]
        });
        await alert.present();
    }

}
