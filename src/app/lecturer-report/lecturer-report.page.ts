import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LectureService } from '../lecture.service';

@Component({
  selector: 'app-lecturer-report',
  templateUrl: './lecturer-report.page.html',
  styleUrls: ['./lecturer-report.page.scss'],
})
export class LecturerReportPage implements OnInit {
  constructor(public router: Router, private lectureService:LectureService) {}
  date = Date();
  myMessage = ""
  report = {
    lecSubId: 4,
    numStudents: '',
    topicsCovered: '',
    teachMode: '',
    presentMode: '',
    resource: '',
    attendAvg: '',
    activities: '',
    assess: '',
    challRecomm: ''
  }



  logForm() {
    /*if (this.report.numStudents == "" ) {
      
    }*/
    console.log(this.report)
    this.lectureService.createReport(this.report)
    .subscribe(data=>{this.myMessage = 'Report is set Successfully'}, 
      error=>{this.myMessage = 'Failed to create Report, CODE: DP'})
  }
  ngOnInit() {
  }

}
