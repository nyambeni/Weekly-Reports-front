import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService } from '../login.service';
import { NavigationExtras, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  role= ''
  select = {
<<<<<<< HEAD
    staffNo: '',
    password: ''
  };

  hod={
    headNum: '',
    password: ''
  }

  lecture={
    lecNum: '',
    password: ''
  }

=======
    email: '',
    password: ''
  };

  lecture={
    email: '',
    password: ''
  }

  hod={
    email: '',
    password: ''
  }

>>>>>>> 56cf240f7d9c1f83014bf14c24062fb3d9ee8c01

  constructor(public navCtrl: NavController,
              private router: Router,
              private log:LoginService) { }

  ngOnInit() {
  }

  logForm() {

    if (this.role == 'HOD'){
<<<<<<< HEAD
      this.hod.headNum = this.select.staffNo
      this.hod.password = this.select.password

      this.log.hodLogin(this.hod)
      .subscribe(data => {
        let dash: NavigationExtras = {
          state:{
            dash: data
          }
        }
        console.log(dash)
        this.navCtrl.navigateForward('/hod-dashboard', dash);
      },
      error=>{
        console.log('wrong credentials')
      })

    } else if(this.role == 'LECTURER') {
      this.lecture.lecNum = this.select.staffNo
=======

      this.hod.email = this.select.email
      this.hod.password = this.select.password
      console.log(this.hod);

      this.log.hodLogin(this.hod)
      .subscribe(data => {
        console.log(data)
      this.navCtrl.navigateForward('/hod-dashboard');
      });

    } else if(this.role == 'LECTURER') {
      this.lecture.email = this.select.email
>>>>>>> 56cf240f7d9c1f83014bf14c24062fb3d9ee8c01
      this.lecture.password = this.select.password
      console.log(this.lecture);

      this.log.lectureLogin(this.lecture)
      .subscribe(data => {
<<<<<<< HEAD

        let dash: NavigationExtras = {
          state:{
            dash: data
          }
        }
        console.log(dash)
        this.navCtrl.navigateForward('/lecture-dashboard',dash);
=======
        console.log(data)
        this.navCtrl.navigateForward('/lecture-dashboard');
>>>>>>> 56cf240f7d9c1f83014bf14c24062fb3d9ee8c01

      })
    }
  }
}
