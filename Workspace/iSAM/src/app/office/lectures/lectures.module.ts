import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturesPageRoutingModule } from './lectures-routing.module';

import { LecturesPage } from './lectures.page';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgCalendarModule,
    IonicModule,
    LecturesPageRoutingModule
  ],
  declarations: [LecturesPage]
})
export class LecturesPageModule {}
