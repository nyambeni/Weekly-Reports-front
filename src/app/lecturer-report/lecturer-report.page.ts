import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { LectureService } from '../lecture.service';
import { ToastController } from '@ionic/angular';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-lecturer-report',
  templateUrl: './lecturer-report.page.html',
  styleUrls: ['./lecturer-report.page.scss'],
})
export class LecturerReportPage implements OnInit {

  numStudents: number = 0
  data: any
  modules: any
  lecSubId = ''
  Myname = ''
  constructor(public router: Router,
    private lectureService: LectureService,
    public navCtrl: NavController,
    private plt: Platform,
    private file: File,
    private fileOpener: FileOpener,
    private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {

      if (this.router.getCurrentNavigation().extras.state) {

        this.modules = this.router.getCurrentNavigation().extras.state.modules;

        console.log(this.modules)
        this.Myname = this.modules[0].title + " " + this.modules[0].lecSurname + " " + this.modules[0].lecName
        console.log(this.Myname)
        this.lecSubId = this.modules[0].lecSubId
        console.log(this.lecSubId)

      }
    })

  }


  report = {
    lecSubId: this.lecSubId,
    module: '',
    department: '',
    numStudents: '',
    topicsCovered: '',
    teachMode: 'MyTUTor',
    teachMode1: 'MS Teams',
    teachMode2: 'SMS',
    teachMode3: 'EC',
    teachMode4: 'WhatsApp',
    teachMode5: 'Paper',
    teachMode6: 'Contact',
    presentMode: '',
    resource: '',
    attendAvg: '',
    activities: '',
    assess: '',
    challRecomm: ''
  }

  date = Date();
  myMessage = ""

  pdfObj = null;


  ngOnInit() {
  }



  logForm() {

    console.log(this.report.lecSubId)



    /* this.lectureService.createReport(this.report)
   .subscribe(data=>{this.myMessage = 'Report is set Successfully'},
     error=>{this.myMessage = 'Failed to create Report, CODE: DP'})*/

  }

  createPdf() {

    var docDefinition = {
      content: [
        { text: 'Lecturer report', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'Name', style: 'subheader' },
        this.Myname,

        { text: 'Module', style: 'subheader' },
        this.report.module,

        { text: 'Department', style: 'subheader' },
        this.report.department,

        { text: 'Number of Students:', style: 'subheader' },
        this.report.numStudents,

        { text: 'Week average Attendance', style: 'subheader' },
        this.report.attendAvg,

        { text: 'Topic(s) covered', style: 'subheader' },
        this.report.topicsCovered,

        { text: 'Mode of Teaching Used', style: 'subheader' },
        this.report.teachMode,
        this.report.teachMode1,
        this.report.teachMode2,
        this.report.teachMode3,
        this.report.teachMode4,
        this.report.teachMode5,
        this.report.teachMode6,

        { text: 'Mode of Presentation', style: 'subheader' },
        this.report.presentMode,

        { text: 'Resources Used', style: 'subheader' },
        this.report.resource,

        { text: 'Activities', style: 'subheader' },
        this.report.activities,

        { text: 'Assessments', style: 'subheader' },
        this.report.assess,

        { text: 'Challenges/Recommendations', style: 'subheader' },
        this.report.challRecomm,
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%'
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }

  downloadPdf() {
    if (this.plt.is('cordova')) {

    } else {
      this.pdfObj.download();
    }
  }

}


