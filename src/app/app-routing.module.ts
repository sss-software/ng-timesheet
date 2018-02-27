import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [
      AuthGuard
    ],
    children: [
      {
        path: '',
        redirectTo: '/sheets',
        pathMatch: 'full'
      },
      {
        path: 'sheets',
        component: TimesheetListComponent
      },
      {
        path: 'sheet',
        component: TimesheetComponent
      },
      {
        path: 'sheet/:id',
        component: TimesheetComponent
      }
    ]
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
