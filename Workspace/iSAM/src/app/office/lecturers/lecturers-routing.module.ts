import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturersPage } from './lecturers.page';

const routes: Routes = [
  {
    path: '',
    component: LecturersPage
  },  {
    path: 'more-details-lecturer-popover',
    loadChildren: () => import('./more-details-lecturer-popover/more-details-lecturer-popover.module').then( m => m.MoreDetailsLecturerPopoverPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturersPageRoutingModule {}
