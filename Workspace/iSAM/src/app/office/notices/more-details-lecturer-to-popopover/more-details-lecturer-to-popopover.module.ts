import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreDetailsLecturerToPOPopoverPageRoutingModule } from './more-details-lecturer-to-popopover-routing.module';

import { MoreDetailsLecturerToPOPopoverPage } from './more-details-lecturer-to-popopover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreDetailsLecturerToPOPopoverPageRoutingModule
  ],
  declarations: [MoreDetailsLecturerToPOPopoverPage]
})
export class MoreDetailsLecturerToPOPopoverPageModule {}
