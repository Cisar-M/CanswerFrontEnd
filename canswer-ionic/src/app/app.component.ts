import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Updates',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Forum',
      url: '/forumn',
      icon: 'chatbubbles'
    },
    {
      title: 'Calendar',
      url: '/calnedar',
      icon: 'calendar'
    },
    {
      title: 'Symptoms',
      url: '/list',
      icon: 'medical'
    },
    {
      title: 'Preventions',
      url: '/treatments',
      icon: 'medkit'
    },
    {
      title: 'Information center',
      url: '/info-center',
      icon: 'information-circle'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    },
    // {
    //   title: 'Login',
    //   url: '/login',
    //   icon: 'log-in'
    // },
    // {
    //   title: 'Register',
    //   url: '/register',
    //   icon: 'person-add'
    // },
    // {
    //   title: 'Article',
    //   url: '/article',
    //   icon: 'paper'
    // }
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
