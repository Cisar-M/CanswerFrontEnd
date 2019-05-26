import { Component, OnInit } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  symptoms: Object;

  //Injects Launch nav for app opening and service for api connection
  constructor(private launchNavigator: LaunchNavigator, private api: ApiService) { }

  private symAmount:number = 0;
  private hProb: boolean = false;
  private mProb: boolean = false;
  private lProb: boolean = true;
  //change the probibility and check if level was altered
  calculateProbability(number: number, e:any){
    if(e.target.checked){
      this.symAmount = this.symAmount + number;
    }else{
      this.symAmount = this.symAmount - number;
    }
    this.reevaluateProbibility()
  }
// Change the level of probability according to how high the total number is\
  reevaluateProbibility(){
    if(this.symAmount> 10){
      this.lProb = false;
      this.mProb = true;
      this.hProb = false;
    }else if(this.symAmount > 15){
      this.lProb = false;
      this.mProb = false;
      this.hProb = true;
    }else{
      this.lProb = true;
      this.mProb = false;
      this.hProb = false;
    }
  }
  //open maps function for button (only when medium or high probibility)
  openMaps(){
    this.launchNavigator.navigate('Hatfield, South Africa').then(
      success => console.log('launched navigator'),
      error => console.log('Error launching navigator', error)
    );
  }
  //Read from the api
  ngOnInit() {
    this.api.getSymptoms().subscribe(data =>{
      this.symptoms = data;
      console.log(this.symptoms);
    })
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
