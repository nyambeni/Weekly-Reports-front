import { Component, OnInit } from '@angular/core';
import { HodService } from '../hod.service';
import {DatePipe} from '@angular/common';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hod-report',
  templateUrl: './hod-report.page.html',
  styleUrls: ['./hod-report.page.scss'],
})
export class HodReportPage implements OnInit {
  deptId: any;
  reports: any[] = [];
  reportDate:any;
  formatDate: any;
  constructor(private hodService: HodService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.deptId = this.router.getCurrentNavigation().extras.state.mySummary;
        console.log(this.deptId);
       
        this.hodService.getReportSummary(this.deptId).subscribe(data => {
          console.log(data.message);
            console.log(data);
            console.log(this.reports);
            this.reports = data.data;
            console.log(this.reports);
            
          }, error => console.log(error)); 
        

      }
    });
  }

  datePipe: any = new DatePipe('en-ZA');

 

  ngOnInit() {
 
  }

  search(){
	
    this.formatDate = this.datePipe.transform(this.reportDate, 'yyyy-MM-dd');
    
    if(this.formatDate == null)  {
       alert("Invalid date selected"); 
    }else{
      this.hodService.searchAllReports(this.formatDate, "NDIT12").subscribe(data => {
      console.log(data);
      console.log(this.reports);
      this.reports = data.data;
      console.log(this.reports);
  
    }, error => console.log(error));
    }
    }

 
}

