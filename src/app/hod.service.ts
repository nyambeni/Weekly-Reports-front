import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HodService {

  constructor(private http: HttpClient) { }

  getReports(id){
    return this.http.get('http://168.172.190.54:4041/hod/hodReport/' + id);

  }

  hodDash(id){
    return this.http.get('http://168.172.190.54:4041/hod/hodDashboard/' + id);
  }

  /*hodDashMod(id){
    return this.http.get('http://168.172.190.54:4041/hod/subjectCode/' + id);
  }*/

  getModules(depId: any): Observable<any> {
	  return this.http.get(`http://168.172.190.54:4041/hod/modules/list/${depId}`);
   } 

   getReportsById(moduleCode: any, depId: any): Observable<any>{
	  return this.http.get(`http://168.172.190.54:4041/hod/reports/reportById/${moduleCode}/${depId}`);
   }

   searchReport(reportDate: any, moduleCode: any, depId: any): Observable<any>{
	  return this.http.get(`http://168.172.190.54:4041/hod/search/report/${reportDate}/${moduleCode}/${depId}`);
   }

   searchAllReports(reportDate: any, depId: any): Observable<any>{
	  return this.http.get(`http://168.172.190.54:4041/hod/search/all/reports/${reportDate}/${depId}`);
   }

   getDetailedReport(reportId: any): Observable<any>{
	  return this.http.get(`http://168.172.190.54:4041/hod/detailed/report/${reportId}`);
   }
   getReportSummary(depId: any): Observable<any>{
    return this.http.get(`http://168.172.190.54:4041/hod/reports/${depId}`);

  }

}
