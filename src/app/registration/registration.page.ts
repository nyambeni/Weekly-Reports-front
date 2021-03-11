import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  department:any
  modules:any

  constructor(private register:RegistrationService,
              private router:Router) {}

  ngOnInit() {
    this.displayDepartment();
    this.displayModules();
  }

  displayDepartment(){
    this.register.getDepartments()
    .subscribe(data => {
      this.department = data
      for(var k =0; k < this.department.length; k++){
      console.log(this.department[k])
        
      }
      console.log(this.department)
    })
  }
module:''


  displayModules(){
    this.register.getModules(this.department.subjCode)
    .subscribe(data =>{
      this.modules = data
      console.log(this.modules)

    },
    error=>{})
  }

}
