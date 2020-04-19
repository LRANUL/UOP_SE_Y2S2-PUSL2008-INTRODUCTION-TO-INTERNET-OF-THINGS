import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBatchModalPageRoutingModule } from './add-batch-modal-routing.module';

import { AddBatchModalPage } from './add-batch-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBatchModalPageRoutingModule
  ],
  declarations: [AddBatchModalPage]
})
export class AddBatchModalPageModule {}
