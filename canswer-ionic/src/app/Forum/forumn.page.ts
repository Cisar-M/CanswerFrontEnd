import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Question } from '../_models/question';


@Component({
  selector: 'app-forumn',
  templateUrl: './forumn.page.html',
  styleUrls: ['./forumn.page.scss'],
})
export class ForumnPage implements OnInit {

  constructor(private service: DataService) { }
  Questions: Array<Question> = [];
  Question: Question;
  singleQuestion = new Question();
  ngOnInit() {
    this.getQuestions().subscribe(data => this.Questions = data);
  }
  getQuestions() {
  return this.service.getQuestion();
}
// this will be used to search for a Question
SearchQuestion() {
// this.service.SearchQuestion().subscribe(data => this.Questions = data);
}
clear() {
  this.getQuestions().subscribe(data => this.Questions = data);
}

}
