import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HodService {

  constructor(private http:HttpClient) { }

  getReports(){
    return this.http.get("http://10.100.14.10:4041/hod/hodReport")

  }
}
