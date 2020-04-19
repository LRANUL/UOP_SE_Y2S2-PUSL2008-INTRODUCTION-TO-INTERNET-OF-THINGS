import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDegreeProgramModalPage } from './add-degree-program-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddDegreeProgramModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDegreeProgramModalPageRoutingModule {}
