import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ForumnPage } from './forumn.page';
var routes = [
    {
        path: '',
        component: ForumnPage
    }
];
var ForumnPageModule = /** @class */ (function () {
    function ForumnPageModule() {
    }
    ForumnPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ForumnPage]
        })
    ], ForumnPageModule);
    return ForumnPageModule;
}());
export { ForumnPageModule };
//# sourceMappingURL=forumn.module.js.map