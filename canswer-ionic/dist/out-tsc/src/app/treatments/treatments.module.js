import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TreatmentsPage } from './treatments.page';
var routes = [
    {
        path: '',
        component: TreatmentsPage
    }
];
var TreatmentsPageModule = /** @class */ (function () {
    function TreatmentsPageModule() {
    }
    TreatmentsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TreatmentsPage]
        })
    ], TreatmentsPageModule);
    return TreatmentsPageModule;
}());
export { TreatmentsPageModule };
//# sourceMappingURL=treatments.module.js.map