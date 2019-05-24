import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CalnedarPage } from './calnedar.page';
import { NgCalendarModule } from 'ionic2-calendar';
var routes = [
    {
        path: '',
        component: CalnedarPage
    }
];
var CalnedarPageModule = /** @class */ (function () {
    function CalnedarPageModule() {
    }
    CalnedarPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                NgCalendarModule
            ],
            declarations: [CalnedarPage]
        })
    ], CalnedarPageModule);
    return CalnedarPageModule;
}());
export { CalnedarPageModule };
//# sourceMappingURL=calnedar.module.js.map