import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonSlides, ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';



@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  constructor(private modalController: ModalController) { }

  @ViewChild('sliderRef', { static: true }) protected slides: IonSlides;

  ngOnInit() {
  }

  async slideNext(): Promise<void> {
    await this.slides.slideNext();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        title: 'Nueva\n<strong>Contraseña\nConfirmada.\n</strong>',
        subTitle: '¡Ya puede iniciar a realizar pedidos!'
      }
    });
    return await modal.present();
  }

}
