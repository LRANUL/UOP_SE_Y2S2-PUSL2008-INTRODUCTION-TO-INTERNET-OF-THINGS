import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditLectureSessionModalPageRoutingModule } from './edit-lecture-session-modal-routing.module';

import { EditLectureSessionModalPage } from './edit-lecture-session-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditLectureSessionModalPageRoutingModule
  ],
  declarations: [EditLectureSessionModalPage]
})
export class EditLectureSessionModalPageModule {}
