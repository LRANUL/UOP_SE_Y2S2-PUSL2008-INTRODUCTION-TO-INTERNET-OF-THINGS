import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturerPageRoutingModule } from './lecturer-routing.module';

import { LecturerPage } from './lecturer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturerPageRoutingModule
  ],
  declarations: [LecturerPage]
})
export class LecturerPageModule {}
