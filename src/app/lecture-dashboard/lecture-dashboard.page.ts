import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LectureService } from '../lecture.service';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-lecture-dashboard',
  templateUrl: './lecture-dashboard.page.html',
  styleUrls: ['./lecture-dashboard.page.scss'],
})
export class LectureDashboardPage implements OnInit {

 
  modules:any;
  subjName = '';
  subjCode='';
  lecName = '';
  lecSubId = '';

  constructor(private router: Router, 
            private lectureService:LectureService) { }

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

    this.lectureService.getSubject(lecSubId)
    .subscribe(data=>{
      let myModules: NavigationExtras = {
        state:{
          modules: data
        }
      }
      console.log(myModules)
      this.router.navigate(['/lecturer-report'],myModules)
    },
      error=>{})
 
    /*let forNav: NavigationExtras={
      state:{
        lecSubId: lecSubId
      }
    };
    
    console.log(forNav)
  this.router.navigate(['/lecturer-report'],forNav)*/
 // this.router.navigateByUrl('/lecturer-report', forNav)

    /*console.log('get',lecSubId)
      this.lectureService.getSubject(lecSubId)
      .subscribe(data => {  
        let forNav: NavigationExtras={
          queryParams:{
            special: JSON.stringify(lecSubId)
          }
        };
       // data = this.modules.lecSubId
        
        console.log(forNav)
      //this.router.navigate[('/lecturer-report')]
      this.router.navigateByUrl('/lecturer-report', forNav)
    }, 
        error=>{}
      )*/
    }

}
