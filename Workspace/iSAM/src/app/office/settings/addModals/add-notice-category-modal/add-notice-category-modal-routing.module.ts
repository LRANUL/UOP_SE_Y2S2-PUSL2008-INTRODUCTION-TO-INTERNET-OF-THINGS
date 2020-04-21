import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNoticeCategoryModalPage } from './add-notice-category-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddNoticeCategoryModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNoticeCategoryModalPageRoutingModule {}
