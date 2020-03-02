import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramOfficePageRoutingModule } from './program-office-routing.module';

import { ProgramOfficePage } from './program-office.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramOfficePageRoutingModule
  ],
  declarations: [ProgramOfficePage]
})
export class ProgramOfficePageModule {}
