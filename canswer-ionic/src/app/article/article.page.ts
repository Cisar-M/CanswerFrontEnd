// Deprecated
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  constructor(public navParams: NavParams, private route: ActivatedRoute, api: ApiService) {
  }
  public article: any;
  // this.article = navParams.get('article')
  goBack(){
    console.log("back clicked");
  }
  id: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    
  }

}
