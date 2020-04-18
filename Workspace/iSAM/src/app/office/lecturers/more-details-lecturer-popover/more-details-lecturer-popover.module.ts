import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreDetailsLecturerPopoverPageRoutingModule } from './more-details-lecturer-popover-routing.module';

import { MoreDetailsLecturerPopoverPage } from './more-details-lecturer-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreDetailsLecturerPopoverPageRoutingModule
  ],
  declarations: [MoreDetailsLecturerPopoverPage]
})
export class MoreDetailsLecturerPopoverPageModule {}
