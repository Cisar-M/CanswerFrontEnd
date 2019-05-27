import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService} from '../data.service'; // ,AuthenticationService
import { Question } from '../_models/question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.page.html',
  styleUrls: ['./add-question.page.scss'],
})
export class AddQuestionPage implements OnInit {

  constructor(private service: DataService,
    ) { } // private AuthServ: AuthenticationService
  profileForm = new FormGroup({
    Question1: new FormControl(''),
  });
  addquestion = new Question();
  ngOnInit() {
  }
  // this is the method that will add the Question to the API
  Add() {
    this.addquestion = new Question();
    // this.addquestion.ID = this.AuthServ.currentUser2.ID;
    // this.addquestion.ID = 2;
    this.addquestion.Question1 = this.profileForm.controls['Question1'].value;
    this.service.AddQuestion(this.addquestion);
    console.log(this.addquestion);
  }
}
