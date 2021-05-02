import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { HodService } from '../hod.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.page.html',
  styleUrls: ['./hod-dashboard.page.scss'],
})
export class HodDashboardPage implements OnInit {
  temp: any;
  deptNum;
  dashboard: any;
  dashboardMod: any;
  hodName;
  email;
  deptName;

  contentLoaded = false;


  constructor(private hodService: HodService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.temp = this.router.getCurrentNavigation().extras.state.dash;
        this.deptNum = this.temp[0].depCode;
        this.hodName = this.temp[0].title + ' ' + this.temp[0].headName + ' ' + this.temp[0].headSurname;
        this.email = this.temp[0].email;
        this.deptName = this.temp[0].deptName;


        console.log('id', this.deptNum);
        console.log('dept name', this.hodName);
        console.log('email', this.email);
        console.log('id', this.deptName);

        this.hodService.hodDashMod(this.deptNum)
        .subscribe(data => {
          this.dashboard = data;
          console.log('hod', this.dashboard);

        },
          error => {});
      }
    });
    setTimeout(() => {
      this.contentLoaded = true;
    }, 3000);
  }

  ngOnInit() {

  }

  summary(){

    const mySummary: NavigationExtras = {
      state: {
        mySummary: this.deptNum
      }
    };
    console.log('hod', mySummary);

    this.router.navigate(['/hod-report'], mySummary);
  }

  detailedReport(modId){
    const detailed: NavigationExtras = {
      state: {
        detailed: modId
      }
    };
    console.log('move to detailed', detailed)
    this.router.navigate(['/detailed-report'],detailed)
  }
}
