import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLectureSessionStatusModalPage } from './add-lecture-session-status-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddLectureSessionStatusModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLectureSessionStatusModalPageRoutingModule {}
