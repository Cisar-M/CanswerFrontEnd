// Deprecated
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) {
  }
  // this.article = navParams.get('article')
  goBack(){
    this.router.navigate(['/']);
  }
  id: any;
  article: Object
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(this.id);
    this.article = this.api.getPost(this.id);
  }

}
