import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreDetailsLecturerToPOPopoverPage } from './more-details-lecturer-to-popopover.page';

const routes: Routes = [
  {
    path: '',
    component: MoreDetailsLecturerToPOPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreDetailsLecturerToPOPopoverPageRoutingModule {}
