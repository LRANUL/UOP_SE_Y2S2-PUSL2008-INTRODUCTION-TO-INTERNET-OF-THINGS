import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLectureHallModalPage } from './add-lecture-hall-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddLectureHallModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLectureHallModalPageRoutingModule {}
