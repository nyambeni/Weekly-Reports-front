import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HodService {

  constructor(private http: HttpClient) { }

  getReport(){
    return this.http.get("http://10.100.14.15:4041/hod/hodReport")
  }
}
