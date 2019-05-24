import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './list/list.module#ListPageModule'
    },
    { path: 'article', loadChildren: './article/article.module#ArticlePageModule' },
    { path: 'find-clinic', loadChildren: './find-clinic/find-clinic.module#FindClinicPageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'forumn', loadChildren: './forumn/forumn.module#ForumnPageModule' },
    { path: 'info-center', loadChildren: './info-center/info-center.module#InfoCenterPageModule' },
    { path: 'treatments', loadChildren: './treatments/treatments.module#TreatmentsPageModule' },
    { path: 'calnedar', loadChildren: './calnedar/calnedar.module#CalnedarPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map