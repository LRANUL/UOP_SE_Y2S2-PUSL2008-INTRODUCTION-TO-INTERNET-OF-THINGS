import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCreditWeightingModalPage } from './add-credit-weighting-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddCreditWeightingModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCreditWeightingModalPageRoutingModule {}
