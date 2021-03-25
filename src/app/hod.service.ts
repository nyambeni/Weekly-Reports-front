import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HodService {

  constructor(private http: HttpClient) { }

  getReports(id){
    return this.http.get('http://localhost:4041/hod/hodReport/' + id);

  }

  hodDash(id){
    return this.http.get('http://localhost:4041/hod/hodDashboard/' + id);
  }

  hodDashMod(id){
    return this.http.get('http://localhost:4041/hod/lecturerID/' + id);
  }

}
