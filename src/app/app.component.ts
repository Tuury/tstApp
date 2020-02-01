import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'MIs Pedidos',
      url: '/mis-pedidos',
      icon: 'cart'
    },
    {
      title: 'Productos',
      url: '/productos',
      icon: 'laptop'
    },
    {
      title: 'MIs Facturas',
      url: '/mis-facturas',
      icon: 'document'
    },
    {
      title: 'Mi Perfil',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Descargas',
      url: '/descargas',
      icon: 'download'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
