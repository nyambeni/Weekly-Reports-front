import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { LectureService } from '../lecture.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-lecturer-report',
  templateUrl: './lecturer-report.page.html',
  styleUrls: ['./lecturer-report.page.scss'],
})
export class LecturerReportPage implements OnInit {

  numStudents = 0;
  data: any;
  modules: any;
  lecSubId = '';
  Myname = '';
  module = '';
  department = '';
  constructor(public router: Router,
              private lectureService: LectureService,
              public navCtrl: NavController,
              private plt: Platform,
              private file: File,
              private fileOpener: FileOpener,
              private route: ActivatedRoute,
              public alertController: AlertController,
              public toastController: ToastController) {

    this.route.queryParams.subscribe(params => {

      if (this.router.getCurrentNavigation().extras.state) {

        this.modules = this.router.getCurrentNavigation().extras.state.modules;

        console.log(this.modules);
        this.Myname = this.modules[0].title + ' ' + this.modules[0].lecSurname + ' ' + this.modules[0].lecName;
        console.log(this.Myname);
        this.lecSubId = this.modules[0].lecSubId;
        console.log(this.lecSubId);
        this.module = this.modules[0].subjName;
        this.department = this.modules[0].deptName;

      }
    });

  }


  report = {
    lecSubId: 0,
    numStudents: '',
    topicsCovered: '',
    teachMode: '',
    presentMode: '',
    resource: '',
    attendAvg: '',
    activities: '',
    assess: '',
    challRecomm: ''
  };

  date = Date();
  myMessage = '';

  pdfObj = null;


  ngOnInit() {
  }

  createPdf() {

    const docDefinition = {
      content: [
        { text: 'Lecturer report', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'Name', style: 'subheader' },
        this.Myname,

        { text: 'Module', style: 'subheader' },
        this.module,

        { text: 'Department', style: 'subheader' },
        this.department,

        { text: 'Number of Students:', style: 'subheader' },
        this.report.numStudents,

        { text: 'Week average Attendance', style: 'subheader' },
        this.report.attendAvg,

        { text: 'Topic(s) covered', style: 'subheader' },
        this.report.topicsCovered,

        { text: 'Mode of Teaching Used', style: 'subheader' },
        this.report.teachMode,

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
    };
    this.pdfObj = pdfMake.createPdf(docDefinition);

    this.report.lecSubId = Number(this.lecSubId);

    this.lectureService.createReport(this.report)
   .subscribe(data => {this.myMessage = 'Report is set Successfully'; },
     error => {this.myMessage = 'Failed to create Report, CODE: DP'; });
     this.showPrompt();
  }

  downloadPdf() {
    if (this.plt.is('cordova')) {

    } else {
      this.pdfObj.download();
    }
  }

  showPrompt() {
    this.alertController.create({
      header: 'Confirm',
      subHeader: 'Are you sure you want to create this report?',
      buttons: [
        {
          text: 'No',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Yes',
          handler: (data: any) => {
            console.log('Saved Information', data);
            this.displayToast();
          }
        }
      ]
    }).then(res => {
      res.present();
    });
    console.log(this.report);
  }

  displayToast() {
    this.toastController.create({
      message: 'Report created successfully!',
      position: 'top',
      cssClass: 'toast-custom-class',
      duration: 2000
    }).then((toast) => {
      toast.present();
      this.navCtrl.navigateBack('/reports')
    });
  } 


}
