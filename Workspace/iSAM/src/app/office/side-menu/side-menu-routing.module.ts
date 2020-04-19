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
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      }, 
      {
        path: 'notices',
        loadChildren: () => import('../notices/notices.module').then(m => m.NoticesPageModule)
      },
      {
        path: 'student-attendance',
        loadChildren: () => import('../student-attendance/student-attendance.module').then(m => m.StudentAttendancePageModule)
      },
      {
        path: 'lectures',
        loadChildren: () => import('../lectures/lectures.module').then(m => m.LecturesPageModule)
      },
      {
        path: 'semester-calendar',
        loadChildren: () => import('../semester-calendar/semester-calendar.module').then(m => m.SemesterCalendarPageModule)
      },
      {
        path: 'modules',
        loadChildren: () => import('../modules/modules.module').then(m => m.ModulesPageModule)
      },
      {
        path: 'students',
        loadChildren: () => import('../students/students.module').then(m => m.StudentsPageModule)
      },
      {
        path: 'lecturers',
        loadChildren: () => import('../lecturers/lecturers.module').then(m => m.LecturersPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideMenuPageRoutingModule {}
