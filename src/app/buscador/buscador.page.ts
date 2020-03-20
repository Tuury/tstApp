import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-buscador',
    templateUrl: './buscador.page.html',
    styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {

    constructor() {
    }

    index = 0;

    list: any[] = [{
        label: 'Cocción',
        expanded: false,
        items: [
            'Anafes', 'Cocinas', 'Campanas', 'Test'
        ]
    },
        {
            label: 'Ventilación',
            expanded: false,
            items: [
                1, 2, 3
            ]
        }
        ,
        {
            label: 'Hogar',
            expanded: false,
            items: [
                'a', 'b', 'c'
            ]
        }
    ];

    ngOnInit() {
    }

    tabClicked(index: number) {
        this.index = index;
    }

}
