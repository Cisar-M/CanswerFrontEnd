import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterModule, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public router: Router, private api: ApiService) { }

  posts: Object;
  
  openPost(id: number){
    console.log(id);
    this.router.navigateByUrl('../article/' + id);
  }

  ngOnInit() {
    this.api.getPosts().subscribe(data =>{
      this.posts = data;
      console.log(this.posts);
    })
  }
}
