import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLectureSessionStatusModalPageRoutingModule } from './add-lecture-session-status-modal-routing.module';

import { AddLectureSessionStatusModalPage } from './add-lecture-session-status-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLectureSessionStatusModalPageRoutingModule
  ],
  declarations: [AddLectureSessionStatusModalPage]
})
export class AddLectureSessionStatusModalPageModule {}
