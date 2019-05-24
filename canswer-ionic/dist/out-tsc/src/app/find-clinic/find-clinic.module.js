import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FindClinicPage } from './find-clinic.page';
var routes = [
    {
        path: '',
        component: FindClinicPage
    }
];
var FindClinicPageModule = /** @class */ (function () {
    function FindClinicPageModule() {
    }
    FindClinicPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FindClinicPage]
        })
    ], FindClinicPageModule);
    return FindClinicPageModule;
}());
export { FindClinicPageModule };
//# sourceMappingURL=find-clinic.module.js.map