import { Component, OnInit } from '@angular/core';
import { HodService } from '../hod.service';
import { Report } from '../report';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Platform } from '@ionic/angular';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-hod-report',
  templateUrl: './hod-report.page.html',
  styleUrls: ['./hod-report.page.scss'],
})
export class HodReportPage implements OnInit {

  hod : any
  activities=''
  assess=''
  challRecomm=''
  subjCode =''

  reports: Report[] = [];
  pdfObj: any;
<<<<<<< HEAD
  plt: any;
  constructor(private hodService: HodService) { }

  ngOnInit() {
    this.getLectureReport()
  }

  getLectureReport(){
    this.hodService.getReports()
    .subscribe(data => { this.hod = data},
      error=>{})
=======
  constructor(private hodService: HodService, private file: File, private plt: Platform,
    private fileOpener: FileOpener,) { }

  ngOnInit() {
    this.hodService.getReports().subscribe(data => {

      console.log(data);
      console.log(this.reports);
      console.log(this.reports);
    }, error => console.log(error));
>>>>>>> 4e0a0e1bdb38c60466ba6cd5cd5949922ec3497f
  }
  downloadPdf() {
    if (this.plt.is('cordova')) {

    } else {
      this.pdfObj.download();
    }
  }


  downloadPdf() {
    if (this.plt.is('cordova')) {

    } else {
      this.pdfObj.download();
    }
  }
}
