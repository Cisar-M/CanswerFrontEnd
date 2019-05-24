import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appPages = [
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
                icon: 'medkit'
            },
            // {
            //   title: 'Find a Clinic',
            //   url: '/find-clinic',
            //   icon: 'medkit'
            // },
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
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map