import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel, FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { Answer } from '../_models/answer';
import { Question } from '../_models/question';
import { User } from '../_models/user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';  // , AuthenticationService
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.page.html',
  styleUrls: ['./add-answer.page.scss'],
})
export class AddAnswerPage implements OnInit {

profileForm = new FormGroup({
    name: new FormControl(''),
  });
  // this is where we get the user info of who is logged in.
  currentuser: User;
  currentquestion: Question;
  // this where we get the current question they are busy with
  constructor(private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private nav: NavController,
    private GeneralServices: DataService,
   ) { }
    // private Authen: AuthenticationService
    Answers: Array<Answer> = [];
    show = false;
    equal = false;
    temp: Answer;
    count = 0;
    quesionid: number ;
    id: string;
  ngOnInit() {
    this.getTheAnswers().subscribe(data => this.Answers = data);
  }

  getTheAnswers() {
     this.id = this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line:radix
    this.quesionid = parseInt(this.id);
    console.log(this.quesionid);
    // <--this is used to get the answers related to the Question
    return this.GeneralServices.getAnswers(this.id);

  }
  send() {
      // this is where we create add the question id to the system.
      this.temp = new Answer();
      // here we assgin the current user information so can be added to the Answer given
      // this.currentuser = this.Authen.currentUser2;
      this.temp.UserID = this.random(); // <-----this here assgin the current user Id to the Answer given
      this.temp.Answer = this.profileForm.controls['name'].value;
      this.temp.QuestionID = this.quesionid; // <------ this here is used to assign the question ID to the answer
      // this.Answers.push(this.temp); <---this is used for demo version
      this.GeneralServices.AddAnswer(this.temp);
      console.log('Succes answer is added ' + this.temp);      // console.log(this.Answers);<---this is used for to see what the data is
      this.ngOnInit();
        }
  goBack() {
          this.router.navigate(['/forumn']);
        }

random() {
           this.count = this.count + 1;
           return this.count;
        }
}
