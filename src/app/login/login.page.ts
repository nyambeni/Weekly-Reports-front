import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

fLogin: {
  role:'',
  email: '',
  password: ''
}


  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log(this.fLogin.role)
  }

}
