import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSymptoms(){
    return this.http.get('http://localhost:51587/api/Users/GetSymptoms');
  }

  getSymmptom(id){
    let params = new HttpParams().set('id', id);
    return this.http.get('http://localhost:51587/api/api/getSymptom',{params: params});
  }

  getPosts(){
    return this.http.get('http://localhost:51587/api/Users/GetPosts');
  }

  getPost(id){
    let params = new HttpParams().set('id', id);
    return this.http.get('http://localhost:51587/api/Users/GetPost',{params: params});
  }
}
