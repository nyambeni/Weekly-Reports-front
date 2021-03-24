import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { LectureService } from '../lecture.service';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-lecture-dashboard',
  templateUrl: './lecture-dashboard.page.html',
  styleUrls: ['./lecture-dashboard.page.scss'],
})
export class LectureDashboardPage implements OnInit {


  modules: any;
  subjName = '';
  subjCode = '';
  lectureInfo: any
  departmentName
  email
  lectureName
  lecturId

  constructor(private router: Router,
    private lectureService: LectureService,
    private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.modules = this.router.getCurrentNavigation().extras.state.dash;
        this.lecturId = this.modules[0].lecNum


      }
    })

  }

  ngOnInit() {
    this.Display()
  }

  Display() {
    this.lectureService.getSubjects(this.lecturId)
      .subscribe(data => {
      this.lectureInfo = data
        this.departmentName = this.lectureInfo[0].deptName
        this.lectureName = this.lectureInfo[0].title+" "+this.lectureInfo[0].lecName+" "+this.lectureInfo[0].lecSurname
        this.email = this.lectureInfo[0].email
      
        console.log('display', this.lectureInfo)
      },
        error => { })
  }


  getModule(id) {
    this.lectureService.getSubject(id)
      .subscribe(data => {
        let myModules: NavigationExtras = {
          state: {
            modules: data
          }
        }
        console.log(myModules)
        this.router.navigate(['/lecturer-report'], myModules)
      },
        error => { console.log('cant') })
  }

  reports(){
    console.log(this.lecturId)
    let myReports: NavigationExtras = {
      state:{
        myReports: this.lecturId
      }
    }
    console.log('move to reports', myReports)
    this.router.navigate(['/reports'], myReports)
  }
}
