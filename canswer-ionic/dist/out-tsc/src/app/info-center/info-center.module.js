import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InfoCenterPage } from './info-center.page';
var routes = [
    {
        path: '',
        component: InfoCenterPage
    }
];
var InfoCenterPageModule = /** @class */ (function () {
    function InfoCenterPageModule() {
    }
    InfoCenterPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [InfoCenterPage]
        })
    ], InfoCenterPageModule);
    return InfoCenterPageModule;
}());
export { InfoCenterPageModule };
//# sourceMappingURL=info-center.module.js.map