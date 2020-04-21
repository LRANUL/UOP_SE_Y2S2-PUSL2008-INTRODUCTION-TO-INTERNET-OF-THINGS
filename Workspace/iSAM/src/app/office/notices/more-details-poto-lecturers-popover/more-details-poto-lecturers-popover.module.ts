import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreDetailsPOToLecturersPopoverPageRoutingModule } from './more-details-poto-lecturers-popover-routing.module';

import { MoreDetailsPOToLecturersPopoverPage } from './more-details-poto-lecturers-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreDetailsPOToLecturersPopoverPageRoutingModule
  ],
  declarations: [MoreDetailsPOToLecturersPopoverPage]
})
export class MoreDetailsPOToLecturersPopoverPageModule {}
