import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLectureHallModalPageRoutingModule } from './add-lecture-hall-modal-routing.module';

import { AddLectureHallModalPage } from './add-lecture-hall-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLectureHallModalPageRoutingModule
  ],
  declarations: [AddLectureHallModalPage]
})
export class AddLectureHallModalPageModule {}
