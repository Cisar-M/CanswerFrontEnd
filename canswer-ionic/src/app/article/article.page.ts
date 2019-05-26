import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  constructor(public navParams: NavParams, private route: ActivatedRoute) {
  }
  public article: any;
  // this.article = navParams.get('article')
  goBack(){
    console.log("back clicked");
  }

  ngOnInit() {
    
  }

}
