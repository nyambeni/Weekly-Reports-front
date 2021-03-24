import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor(private http: HttpClient) { }
  getSubjects(lectureId){
    return this.http.get("http://10.100.14.10:4041/lecture/lectureDashboard/"+lectureId)
  }

  getSubject(Id){
    return this.http.get("http://10.100.14.10:4041/lecture/selectedModule/"+Id)
  }

  getLectuerInfo(){
    return this.http.get("http://10.100.14.10:4041/lecture/selectedModule")
    }
  
  createReport(body:any){
    return this.http.post("http://10.100.14.10:4041/lecture/report",body,{
      observe:'body'
    })
  }

  getMyReport(lectureNum){
    return this.http.get("http://10.100.14.10:4041/lecture//myReports/"+lectureNum)
  }
}