import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
 
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'forumn', loadChildren: './forumn/forumn.module#ForumnPageModule' },
  { path: 'info-center', loadChildren: './info-center/info-center.module#InfoCenterPageModule' },
  { path: 'treatments', loadChildren: './treatments/treatments.module#TreatmentsPageModule' },
  { path: 'calnedar', loadChildren: './calnedar/calnedar.module#CalnedarPageModule' },


  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'list', loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard] }, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
