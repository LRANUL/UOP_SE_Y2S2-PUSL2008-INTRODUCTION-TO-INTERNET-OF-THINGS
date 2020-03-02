import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramOfficePage } from './program-office.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramOfficePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramOfficePageRoutingModule {}
