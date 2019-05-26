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
  constructor(public router: Router, private http: ApiService) { }

  post: Object;
  
  openPost(id){
    this.router.navigateByUrl('../article/article/' + id);
  }
}
