import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  article: Article
  id;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
