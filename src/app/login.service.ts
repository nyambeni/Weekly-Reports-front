import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  lectureLogin(body:any){
<<<<<<< HEAD
    return this.http.post("http://localhost:4041/login/lecturerLogin",body,{
=======
    return this.http.post("http://10.100.14.10:4041/login/lecturerLogin",body,{
>>>>>>> 56cf240f7d9c1f83014bf14c24062fb3d9ee8c01
      observe:'body'
    })
  }

  hodLogin(body:any){
<<<<<<< HEAD
    return this.http.post("http://localhost:4041/login/hodLogin",body,{
=======
    return this.http.post("http://10.100.14.10:4041/login/hodLogin",body,{
>>>>>>> 56cf240f7d9c1f83014bf14c24062fb3d9ee8c01
      observe:'body'
    })
  }
}
