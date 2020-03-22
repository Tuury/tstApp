import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private iab: InAppBrowser) {}

  images: any[] = [{
    src: '../../assets/images.jpeg',
    link: '/productos/product/1'
  },{
    src: '../../assets/download.jpeg',
    link: 'https://www.google.com/'
  },
    {
      src: '../../assets/download.jpeg',
      link: '/buscador'
    }];


  imageClicked(link){
    if (link.startsWith('/')) {
      this.router.navigateByUrl(link);
    } else {
      this.iab.create(link);
    }
  }
  

}
