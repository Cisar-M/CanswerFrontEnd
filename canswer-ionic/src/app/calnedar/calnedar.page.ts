import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import {CalendarComponent} from 'ionic2-calendar/calendar';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-calnedar',
  templateUrl: './calnedar.page.html',
  styleUrls: ['./calnedar.page.scss'],
})
export class CalnedarPage implements OnInit {

  event = {
    title: '',
    description: '',
    startTime:'',
    endTime:'',
    allDay: false

  };
  minDate = new Date().toISOString();

  eventSource =[];
  calendar = {
    mode:'day',
    currentDate: new Date ()
  }
  viewTitle ='';

 
  @ViewChild(CalendarComponent) myCal:CalendarComponent; 

  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID)private locale: string) { }

  ngOnInit() {
    this.resetEvent();
  }
  resetEvent(){
    this.event = {
      title: '',
    description: '',
    startTime:new Date().toISOString(),
    endTime: new Date().toISOString(),
    allDay: false
    };
  }
  addEvent(){
    let eventCopy = {
      title: this.event.title,
      startTime: new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      description:this.event.description
    }
    if (eventCopy.allDay){
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
}
changeMode(mode){
  this.calendar.mode = mode;
 }
 back (){
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}
next(){
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();

}
today(){
  this.calendar.currentDate = new Date();
}

async onEventSelected(event){
  let start = formatDate(event.startTime, 'medium', this.locale);
  let end = formatDate(event.endTime, 'medium', this.locale);
 
  const alert = await this.alertCtrl.create({
    header: event.title,
    subHeader: event.desc,
    message: 'From: ' + start + '<br><br>To: ' + end,
    buttons: ['OK']
  });
  alert.present();
}
onViewTitleChanged(title){
  this.viewTitle = title;

}
//Time slot that was selected
onTimeSelected(ev){
  let selected = new Date(ev.selectedTime);
  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString());
}
}
