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

  reports: Report[] = [];
  pdfObj: any;
  constructor(private hodService: HodService, private file: File, private plt: Platform,
    private fileOpener: FileOpener,) { }

  ngOnInit() {
    this.hodService.getReports().subscribe(data => {

      console.log(data);
      console.log(this.reports);
      console.log(this.reports);
    }, error => console.log(error));
  }
  downloadPdf() {
    if (this.plt.is('cordova')) {

    } else {
      this.pdfObj.download();
    }
  }


}
