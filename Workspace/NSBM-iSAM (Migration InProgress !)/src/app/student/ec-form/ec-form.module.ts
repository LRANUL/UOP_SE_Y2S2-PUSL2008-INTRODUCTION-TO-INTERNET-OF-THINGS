import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcFormPageRoutingModule } from './ec-form-routing.module';

import { EcFormPage } from './ec-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcFormPageRoutingModule
  ],
  declarations: [EcFormPage]
})
export class EcFormPageModule {}
