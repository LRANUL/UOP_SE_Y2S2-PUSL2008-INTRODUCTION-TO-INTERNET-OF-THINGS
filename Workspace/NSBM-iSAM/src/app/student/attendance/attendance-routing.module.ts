import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendancePage } from './attendance.page';

const routes: Routes = [
  {
    path: '',
    component: AttendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendancePageRoutingModule {}
