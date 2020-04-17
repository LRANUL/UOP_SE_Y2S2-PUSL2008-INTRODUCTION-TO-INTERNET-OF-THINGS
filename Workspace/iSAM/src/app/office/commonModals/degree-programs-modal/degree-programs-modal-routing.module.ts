import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DegreeProgramsModalPage } from './degree-programs-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DegreeProgramsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DegreeProgramsModalPageRoutingModule {}
