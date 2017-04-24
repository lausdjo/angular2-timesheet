import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

import { TimesheetListComponent } from './timesheet/timesheet-list/timesheet-list.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

import { ProjectListComponent } from './project/project-list/project-list.component';

import { PageNotFoundComponent } from './core/not-found.component';

const appRoutes: Routes = [
  { path: 'employees', component: EmployeeListComponent },

  { path: 'timesheets', component: TimesheetListComponent },
  { path: 'timesheets/:id', component: TimesheetComponent },

  { path: 'projects', component: ProjectListComponent },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ PageNotFoundComponent ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
