import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  private symAmount:number = 0;
  private hProb: boolean = true;
  private mProb: boolean = false;
  private lProb: boolean = false;
  calculateProbability(number: number, e:any){
    if(e.checked){
      e = e+ number;
    }else{
      e = e - number
    }

  }

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

  openMaps(){

  }
  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
