import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-buscador',
    templateUrl: './buscador.page.html',
    styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {

    constructor() {
    }

    list: any[] = [{
        label: 'Cocción',
        expanded: false,
        items: [
          1, 2, 3
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

    isClicked(item: any) {
        item.expanded = !item.expanded;
    }

}
