import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  select = {
    role: '',
    email: '',
    password: ''
  };

  logForm() {
    console.log(this.select);
    if (this.select.role === 'HOD'){
      this.navCtrl.navigateForward('/hod-dashboard');
    } else {
      this.navCtrl.navigateForward('/lecture-dashboard');
    }
  }
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
}
