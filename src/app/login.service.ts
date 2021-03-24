import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  lectureLogin(body:any){
    return this.http.post("http://10.100.14.10:4041/login/lecturerLogin",body,{
      observe:'body'
    })
  }

  hodLogin(body:any){
    return this.http.post("http://10.100.14.10:4041/login/hodLogin",body,{
      observe:'body'
    })
  }
}
