import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor() { }

  @ViewChild('sliderRef', { static: true }) protected slides: IonSlides;

  ngOnInit() {
  }

  async slideNext(): Promise<void> {
    await this.slides.slideNext();
  }

  async slidPrev(): Promise<void> {
    await this.slides.slidePrev();
  }

}
