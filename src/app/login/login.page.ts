import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService } from '../login.service';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  contentLoaded = true;

  role = '';
  select = {
    staffNo: '',
    password: ''
  };

  hod = {
    headNum: '',
    password: ''
  };

  lecture = {
    lecNum: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
              private router: Router,
              private log: LoginService,
              public loadingController: LoadingController) { }

  ngOnInit() {
  }

  logForm() {

    if (this.role === 'HOD'){
      this.hod.headNum = this.select.staffNo;
      this.hod.password = this.select.password;

      this.log.hodLogin(this.hod)
      .subscribe(data => {
        const dash: NavigationExtras = {
          state: {
            dash: data
          }
        };
        console.log(dash);
        this.navCtrl.navigateForward('/hod-dashboard', dash);
      },
      error => {
        console.log('wrong credentials');
      });

    } else if (this.role === 'LECTURER') {
      this.lecture.lecNum = this.select.staffNo;
      this.lecture.password = this.select.password;
      console.log(this.lecture);

      this.log.lectureLogin(this.lecture)
      .subscribe(data => {
        console.log(data);
        this.presentLoading();
        this.navCtrl.navigateForward('/lecture-dashboard');

        const dash: NavigationExtras = {
          state: {
            dash: data
          }
        };
        console.log(dash);
        this.presentLoading();
        this.navCtrl.navigateForward('/lecture-dashboard', dash);

      });
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Logging in...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
