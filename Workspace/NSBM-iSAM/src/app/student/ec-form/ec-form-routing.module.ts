import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcFormPage } from './ec-form.page';

const routes: Routes = [
  {
    path: '',
    component: EcFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcFormPageRoutingModule {}
