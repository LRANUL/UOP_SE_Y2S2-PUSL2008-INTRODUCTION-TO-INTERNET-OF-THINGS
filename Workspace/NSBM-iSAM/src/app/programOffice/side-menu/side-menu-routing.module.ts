import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideMenuPage } from './side-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SideMenuPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
      }, 
      {
        path: 'notices',
        loadChildren: '../notices/notices.module#NoticesPageModule'
      },
      {
        path: 'student-attendance',
        loadChildren: '../student-attendance/student-attendance.module#StudentAttendancePageModule'
      },
      {
        path: 'modules',
        loadChildren: '../modules/modules.module#ModulesPageModule'
      },
      {
        path: 'students',
        loadChildren: '../students/students.module#StudentsPageModule'
      },
      {
        path: 'lecturers',
        loadChildren: '../lecturers/lecturers.module#LecturersPageModule'
      },
      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfilePageModule'
      },
      {
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideMenuPageRoutingModule {}
