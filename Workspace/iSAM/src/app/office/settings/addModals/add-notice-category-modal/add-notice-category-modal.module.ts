import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNoticeCategoryModalPageRoutingModule } from './add-notice-category-modal-routing.module';

import { AddNoticeCategoryModalPage } from './add-notice-category-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNoticeCategoryModalPageRoutingModule
  ],
  declarations: [AddNoticeCategoryModalPage]
})
export class AddNoticeCategoryModalPageModule {}
