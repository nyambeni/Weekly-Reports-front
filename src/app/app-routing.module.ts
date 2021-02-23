import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hod-report',
    loadChildren: () => import('./hod-report/hod-report.module').then( m => m.HodReportPageModule)
  },
  {
    path: 'hod-dashboard',
    loadChildren: () => import('./hod-dashboard/hod-dashboard.module').then( m => m.HodDashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'hod-dashboard',
    loadChildren: () => import('./hod-dashboard/hod-dashboard.module').then( m => m.HodDashboardPageModule)
  },
  {
    path: 'hod-report',
    loadChildren: () => import('./hod-report/hod-report.module').then( m => m.HodReportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
