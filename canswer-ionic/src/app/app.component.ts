import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';


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
      title: 'Forumn',
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
      icon: 'list'
    },
    {
      title: 'Preventions',
      url: '/treatments',
      icon: 'home'
    },
    {
      title: 'Find a Clinic',
      url: '/find-clinic',
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
      icon: 'logout'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'person-add'
    },
    {
      title: 'Article',
      url: '/article',
      icon: 'paper'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.getToken(); 
    });
  }
  logout() {
    this.authService.logout().subscribe(
      data => {
        this.alertService.presentToast(data['message']);        
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/landing');
      }
    );
  } 
}
