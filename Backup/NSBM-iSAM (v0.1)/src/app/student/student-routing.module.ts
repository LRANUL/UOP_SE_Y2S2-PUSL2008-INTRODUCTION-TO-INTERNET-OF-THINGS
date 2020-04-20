import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPage } from './student.page';

const routes: Routes = [
  {
    path: '',
    component: StudentPage, pathMatch: 'full'
  },
  {
    path: 'Student',
    loadChildren: () => import('./student.module').then(m => m.StudentPageModule)
  },
  {
    path: 'Attendence',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'Notices',
    loadChildren: () => import('./notices/notices.module').then( m => m.NoticesPageModule)
  },
  {
    path: 'EC-Form',
    loadChildren: () => import('./ec-form/ec-form.module').then( m => m.EcFormPageModule)
  },
  {
    path: 'Settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'eSign',
    loadChildren: () => import('./esign/esign.module').then( m => m.EsignPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageRoutingModule {

}
