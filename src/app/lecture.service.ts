import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor(private http: HttpClient) { }

  getLectuerInfo(){
    return this.http.get("http://10.100.14.15:4041/lecture/report",{
      observe:'body'
    })
  }

  createReport(body:any){
    return this.http.post("http://10.100.14.15:4041/lecture/report",body,{
      observe:'body'
    })
  }

}
