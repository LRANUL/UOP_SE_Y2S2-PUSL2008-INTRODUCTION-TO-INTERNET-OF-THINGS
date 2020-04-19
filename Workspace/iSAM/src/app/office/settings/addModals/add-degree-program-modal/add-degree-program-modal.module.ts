import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDegreeProgramModalPageRoutingModule } from './add-degree-program-modal-routing.module';

import { AddDegreeProgramModalPage } from './add-degree-program-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDegreeProgramModalPageRoutingModule
  ],
  declarations: [AddDegreeProgramModalPage]
})
export class AddDegreeProgramModalPageModule {}
