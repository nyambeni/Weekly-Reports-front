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


  constructor(public navCtrl: NavController,
              private router: Router,
              private log:LoginService) { }

  ngOnInit() {
  }

  logForm() {

    if (this.role == 'HOD'){

      this.hod.email = this.select.email
      this.hod.password = this.select.password
      console.log(this.hod);

      this.log.hodLogin(this.hod)
      .subscribe(data => {
        console.log(data)
      });
      this.navCtrl.navigateForward('/hod-dashboard');

    } else if(this.role == 'LECTURER') {
      this.lecture.email = this.select.email
      this.lecture.password = this.select.password
      console.log(this.lecture);

      this.log.lectureLogin(this.lecture)
      .subscribe(data => {
        console.log(data)
        this.navCtrl.navigateForward('/lecture-dashboard');

      })
    }
  }
}
