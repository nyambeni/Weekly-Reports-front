import { Component, OnInit } from '@angular/core';
import { LectureService } from '../lecture.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detailed-report',
  templateUrl: './detailed-report.page.html',
  styleUrls: ['./detailed-report.page.scss'],
})
export class DetailedReportPage implements OnInit {
  reportNumber;
  report: any;
  numberOfStudents;
  averAttendance;
  topicsCovered;
  teachMode;
  presentMode;
  resource;
  activities;
  assess;
  challRecomm;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private lectureService: LectureService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.reportNumber = this.router.getCurrentNavigation().extras.state.detailed;
      }
    });
  }

  ngOnInit() {
    this.displayReport();
  }

  displayReport(){
    this.lectureService.getDetailedReport(this.reportNumber)
    .subscribe(data => {
      this.report = data;
      this.numberOfStudents = this.report[0].numStudents;
      this.averAttendance = this.report[0].attendAvg;
      this.topicsCovered = this.report[0].topicsCovered;
      this.teachMode = this.report[0].teachMode;
      this.presentMode = this.report[0].presentMode;
      this.resource = this.report[0].resource;
      this.activities = this.report[0].activities;
      this.assess = this.report[0].assess;
      this.challRecomm = this.report[0].challRecomm;
    });
  }

}
