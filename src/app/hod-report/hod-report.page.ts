import { Component, OnInit } from '@angular/core';
import { HodService } from '../hod.service';
import { Report } from '../report';


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
  constructor(private hodService: HodService) { }

  ngOnInit() {
    this.getLectureReport()
  }

  getLectureReport(){
    this.hodService.getReport()
    .subscribe(data => { this.hod = data},
      error=>{})
  }

}
