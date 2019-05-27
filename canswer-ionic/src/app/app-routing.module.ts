import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
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
  { path: 'forumn', loadChildren: './Forum/forumn.module#ForumnPageModule' },
  { path: 'info-center', loadChildren: './info-center/info-center.module#InfoCenterPageModule' },
  { path: 'treatments', loadChildren: './treatments/treatments.module#TreatmentsPageModule' },
  { path: 'calnedar', loadChildren: './calnedar/calnedar.module#CalnedarPageModule' },
  { path: 'addquestion', loadChildren: './add-question/add-question.module#AddQuestionPageModule' },
  { path: 'add-answer/:id', loadChildren: './add-answer/add-answer.module#AddAnswerPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
