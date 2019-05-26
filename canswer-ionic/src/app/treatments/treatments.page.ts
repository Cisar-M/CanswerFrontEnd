import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/File/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.page.html',
  styleUrls: ['./treatments.page.scss'],
})
export class TreatmentsPage implements OnInit {

  ngOnInit() {
  }
  
  
  constructor(private platform: Platform, private file: File, private ft: FileTransfer,
    private fileOpener: FileOpener, private document: DocumentViewer ) { 

    }
    openMealPdf(){
      //  const options: DocumentViewerOptions = {
        //  title: 'My PDF'
        //}
       console.log('openning  meal plan'); 
       this.document.viewDocument('.\assets\CancerMPlan.pdf','application/pdf',{});
      }

  openSmokingPdf(){
    console.log('openning stop smoking tips'); 
       this.document.viewDocument('.\assets\StopSmokingTips.pdf','application/pdf',{});
  }
   
  openChemoPdf(){
    console.log('openning chemo plan'); 
       this.document.viewDocument('.\assets\ChemoPlan.pdf','application/pdf',{});
  }
  ExercisePdf(){
    console.log('openning chemo plan'); 
       this.document.viewDocument('.\assets\ChemoPlan.pdf','application/pdf',{});
  }
 
  }


