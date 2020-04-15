import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'student',
    component: TabsPage,
    children: [
      {
        path: 'eSign',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../student/esign/esign.module').then(m => m.EsignPageModule)
          }
        ]
      },
      {
        path: 'Attendance',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../student/attendance/attendance.module').then(m => m.AttendancePageModule)
          }
        ]
      },
      {
        path: 'Notices',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../student/notices/notices.module').then(m => m.NoticesPageModule)
          }
        ]
      }, 
      {
        path: 'EC-Form',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../student/ec-form/ec-form.module').then(m => m.EcFormPageModule)
          }
        ]
      },
      {
        path: 'Settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../student/settings/settings.module').then(m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/eSign',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/eSign',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
