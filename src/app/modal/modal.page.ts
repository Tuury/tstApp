import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'modal-page',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

    @Input() title: string;
    @Input() subTitle: string;

    constructor(private modalController: ModalController, private router: Router) {
    }

    ngOnInit() {
    }

    ingresar() {
        this.router.navigate(['/home']);
        this.modalController.dismiss({
            dismissed: true
        });
    }

}
