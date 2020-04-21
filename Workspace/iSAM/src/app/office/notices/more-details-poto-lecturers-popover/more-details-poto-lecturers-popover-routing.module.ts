import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreDetailsPOToLecturersPopoverPage } from './more-details-poto-lecturers-popover.page';

const routes: Routes = [
  {
    path: '',
    component: MoreDetailsPOToLecturersPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreDetailsPOToLecturersPopoverPageRoutingModule {}
