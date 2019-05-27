import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from './_models/answer';
import { Observable } from 'rxjs';
import { Question } from './_models/question';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  apiurl = 'http://localhost:51587/api/Users/';


  getAnswers(id: string) {
    return this.http.get<Answer[]>(`http://localhost:51587/api/Users/getAnswers/${id}`);
    }
   getQuestion(): Observable<Question[]> {
     return this.http.get<Question[]>('http://localhost:51587/api/Users/getQuestions');
   }
   getQuestionbyId(id: number) {
    return this.http.get<Question>(`http://localhost:51587/api/Users/GetQuestionbyId/${id}`);
    }
   AddQuestion(question: Question) {
     console.log('it works');
     return this.http.post('http://localhost:51587/api/Users/AddQuestion', question).subscribe();
   }
   AddAnswer(answer: Answer) {
     return this.http.post('http://localhost:51587/api/Users/AddAnswer', answer).subscribe();
   }
}
