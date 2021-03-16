import { Component, OnInit } from '@angular/core';
import { HodService } from '../hod.service';
import { Report } from '../report';

@Component({
  selector: 'app-hod-report',
  templateUrl: './hod-report.page.html',
  styleUrls: ['./hod-report.page.scss'],
})
export class HodReportPage implements OnInit {

  reports: Report[] = [];
  constructor(private hodService: HodService) { }

  ngOnInit() {
    this.hodService.getReports().subscribe(data => {

      console.log(data);
      console.log(this.reports);
      console.log(this.reports);
    }, error => console.log(error));
  }

}
