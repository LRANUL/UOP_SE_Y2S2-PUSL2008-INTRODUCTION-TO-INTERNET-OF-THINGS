import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreDetailsPOToStudentsPopoverPage } from './more-details-poto-students-popover.page';

const routes: Routes = [
  {
    path: '',
    component: MoreDetailsPOToStudentsPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreDetailsPOToStudentsPopoverPageRoutingModule {}
