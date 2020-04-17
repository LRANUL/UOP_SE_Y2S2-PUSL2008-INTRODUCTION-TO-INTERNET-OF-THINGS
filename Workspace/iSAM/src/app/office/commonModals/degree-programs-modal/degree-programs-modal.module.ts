import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DegreeProgramsModalPageRoutingModule } from './degree-programs-modal-routing.module';

import { DegreeProgramsModalPage } from './degree-programs-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DegreeProgramsModalPageRoutingModule
  ],
  declarations: [DegreeProgramsModalPage]
})
export class DegreeProgramsModalPageModule {}
