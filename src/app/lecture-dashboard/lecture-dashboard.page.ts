import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LectureService } from '../lecture.service';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-lecture-dashboard',
  templateUrl: './lecture-dashboard.page.html',
  styleUrls: ['./lecture-dashboard.page.scss'],
})
export class LectureDashboardPage implements OnInit {

 
  modules : any
  subjName = '';
  subjCode='';
  lecName = ''
  lecSubId = 0

  constructor(private router: Router, private lectureService:LectureService) { }

  ngOnInit() {
    this.Display()
  }

  Display(){
    console.log('values ',this.modules)
    this.lectureService.getSubjects()
    .subscribe(data => { this.modules = data},
      error =>{})
  }

  getModule(lecSubId) {
    console.log('get',lecSubId)
      this.lectureService.getSubject(lecSubId)
      .subscribe(data => {  data = this.modules
        console.log(data)
      //this.router.navigate[('/lecturer-report')]
      this.router.navigateByUrl('/lecturer-report', data)
    }, 
        error=>{}
      )
    }

}
