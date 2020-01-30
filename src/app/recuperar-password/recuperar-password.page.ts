import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  constructor() { }

  @ViewChild('sliderRef', { static: true }) protected slides: IonSlides;

  ngOnInit() {
  }

  async slideNext(): Promise<void> {
    await this.slides.slideNext();
  }

}
