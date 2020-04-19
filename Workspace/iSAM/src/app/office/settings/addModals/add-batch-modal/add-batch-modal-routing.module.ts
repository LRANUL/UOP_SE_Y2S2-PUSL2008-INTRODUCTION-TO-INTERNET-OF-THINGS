import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBatchModalPage } from './add-batch-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddBatchModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBatchModalPageRoutingModule {}
