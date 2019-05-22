import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArticlePage } from '../article/article.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl: NavController) { }

  openPost(article){
    this.navCtrl.push(ArticlePage, {article: article} )
  }
}
