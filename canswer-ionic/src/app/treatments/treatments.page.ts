import { Component, OnInit } from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.page.html',
  styleUrls: ['./treatments.page.scss'],
})
export class TreatmentsPage implements OnInit {

  constructor(public navCtrl:NavController, private platform: Platform ,private document: DocumentViewer, private file: File, private transfer:FileTransfer) { }

  ngOnInit() {
    console.log("phase1");
  }
  openLocalPdf(){
  //  const options: DocumentViewerOptions = {
    //  title: 'My PDF'
    //}
   console.log('work'); 
   this.document.viewDocument('.\assets\images\Managing_the_Side_Effects_of_Chemotherapy.pdf','application/pdf',{});
  }
  downloadAndOpenPdf(){
    let path = null;
    if (this.platform.is('ios')){
      path = this.file.documentsDirectory;
    }
    else{
      path = this.file.dataDirectory;
    }
    const transfer = this.transfer.create();
    transfer.download('https://devdactic.com/html/5-simple-hacks-LBT.pdf', path + 'chemcare.pdf ').then(entry =>
    {let url = entry.TOURL();
    this.document.viewDocument(url, 'application/pdf', {});
  });
  }



}
