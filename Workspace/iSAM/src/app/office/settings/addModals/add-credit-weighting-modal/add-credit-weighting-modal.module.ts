import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCreditWeightingModalPageRoutingModule } from './add-credit-weighting-modal-routing.module';

import { AddCreditWeightingModalPage } from './add-credit-weighting-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCreditWeightingModalPageRoutingModule
  ],
  declarations: [AddCreditWeightingModalPage]
})
export class AddCreditWeightingModalPageModule {}
