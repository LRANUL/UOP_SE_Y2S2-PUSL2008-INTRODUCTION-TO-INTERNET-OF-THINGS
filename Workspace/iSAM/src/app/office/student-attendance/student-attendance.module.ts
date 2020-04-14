import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentAttendancePageRoutingModule } from './student-attendance-routing.module';

import { StudentAttendancePage } from './student-attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentAttendancePageRoutingModule
  ],
  declarations: [StudentAttendancePage]
})
export class StudentAttendancePageModule {}
