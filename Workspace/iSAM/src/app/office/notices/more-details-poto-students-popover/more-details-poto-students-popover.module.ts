import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreDetailsPOToStudentsPopoverPageRoutingModule } from './more-details-poto-students-popover-routing.module';

import { MoreDetailsPOToStudentsPopoverPage } from './more-details-poto-students-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreDetailsPOToStudentsPopoverPageRoutingModule
  ],
  declarations: [MoreDetailsPOToStudentsPopoverPage]
})
export class MoreDetailsPOToStudentsPopoverPageModule {}
