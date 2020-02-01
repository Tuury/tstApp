import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides, ModalController} from '@ionic/angular';
import {ModalPage} from "../modal/modal.page";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private modalController: ModalController) { }

  @ViewChild('sliderRef', { static: true }) protected slides: IonSlides;

  ngOnInit() {
  }

  async slideNext(): Promise<void> {
    await this.slides.slideNext();
  }

  async slidPrev(): Promise<void> {
    await this.slides.slidePrev();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        title: 'Registro\n <strong>Confirmado.\n</strong>',
        subTitle: '¡<strong>Bienvenido a la nueva App de TST!.</strong>\nPuede iniciar a realizar pedidos'
      }
    });
    return await modal.present();
  }

}
