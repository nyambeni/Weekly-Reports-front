import { Component, OnInit } from '@angular/core';
import { HodService } from '../hod.service';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hod-view-module',
  templateUrl: './hod-view-module.page.html',
  styleUrls: ['./hod-view-module.page.scss'],
})
export class HodViewModulePage implements OnInit {
	
  reports: any[] = [];
  moduleCode: any;
  errorMsg: any;
  formatDate: any;
  reportDate: any;
  codeId: any;
  deptId: any;
  
  constructor(private router: Router, private route: ActivatedRoute, private apiService: HodService) { 
     this.formatDate = "";
     
  }
  
  datePipe: any = new DatePipe('en-ZA');

  ngOnInit(){
	  
	this.moduleCode = this.router.getCurrentNavigation().extras.state.module;
  this.deptId = this.router.getCurrentNavigation().extras.state.depId;    
	
	this.apiService.getReportsById(this.moduleCode, this.deptId).subscribe(data => {
	console.log(data.message);
	console.log(data);
    console.log(this.reports);
    this.reports = data.data;
	
	console.log(this.reports);
	  
	}, error => console.log(error));
  }
  
  search(){
	  
    this.formatDate = this.datePipe.transform(this.reportDate, 'yyyy-MM-dd');
    
    if(this.formatDate == null)  {
       alert("Invalid date selected"); 
    }else{
      this.apiService.searchReport(this.formatDate, this.moduleCode, this.deptId).subscribe(data => {
      console.log(data);
      console.log(this.reports);
      this.reports = data.data;
      console.log(this.reports);	
      
      
    }, error => console.log(error));
    }
    }

  detailedReport(reportId: any){
	this.router.navigateByUrl('/detailed-report', {state: reportId});
   }

}
