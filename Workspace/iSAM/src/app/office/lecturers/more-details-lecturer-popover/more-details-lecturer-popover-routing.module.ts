import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreDetailsLecturerPopoverPage } from './more-details-lecturer-popover.page';

const routes: Routes = [
  {
    path: '',
    component: MoreDetailsLecturerPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreDetailsLecturerPopoverPageRoutingModule {}
