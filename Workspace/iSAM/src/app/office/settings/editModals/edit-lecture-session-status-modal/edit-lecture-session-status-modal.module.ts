import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLectureSessionStatusModalPageRoutingModule } from './edit-lecture-session-status-modal-routing.module';

import { EditLectureSessionStatusModalPage } from './edit-lecture-session-status-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditLectureSessionStatusModalPageRoutingModule
  ],
  declarations: [EditLectureSessionStatusModalPage]
})
export class EditLectureSessionStatusModalPageModule {}
