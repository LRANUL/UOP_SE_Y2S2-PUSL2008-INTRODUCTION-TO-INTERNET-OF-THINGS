import { HttpClient, HttpHandler } from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from "@angular/fire/auth"; 
import { DegreeProgramsModalPageModule } from './office/commonModals/degree-programs-modal/degree-programs-modal.module';
import { MoreDetailsModulePopoverPageModule } from './office/modules/more-details-module-popover/more-details-module-popover.module';
import { EditModuleModalPageModule } from './office/modules/edit-module-modal/edit-module-modal.module';
import { MoreDetailsLecturerPopoverPageModule } from './office/lecturers/more-details-lecturer-popover/more-details-lecturer-popover.module';
import { AngularFireDatabase } from '@angular/fire/database/';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgCalendarModule  } from 'ionic2-calendar';

import { EditLectureSessionModalPageModule } from './office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.module';
import { MoreDetailsSessionPopoverPageModule } from './office/semester-calendar/more-details-session-popover/more-details-session-popover.module';
import { EditLectureHallModalPageModule } from './office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.module';
import { NotificationsPopoverPageModule } from './office/notifications-popover/notifications-popover.module';
import { EditLectureSeriesModalPageModule } from './office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.module';
import { UpdateAccountPasswordModalPageModule } from './office/settings/update-account-password-modal/update-account-password-modal.module';
import { UpdateAccountDetailsModalPageModule } from './office/settings/update-account-details-modal/update-account-details-modal.module';
import { MoreInformationPopoverPageModule } from './office/settings/more-information-popover/more-information-popover.module';
import { EditUserAccountStatusModalPageModule } from './office/settings/editModals/edit-user-account-status-modal/edit-user-account-status-modal.module';
import { EditBatchModalPageModule } from './office/settings/editModals/edit-batch-modal/edit-batch-modal.module';
import { EditCreditWeightingModalPageModule } from './office/settings/editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.module';
import { EditDegreeProgramModalPageModule } from './office/settings/editModals/edit-degree-program-modal/edit-degree-program-modal.module';
import { EditLectureSessionStatusModalPageModule } from './office/settings/editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.module';
import { EditNoticeCategoryModalPageModule } from './office/settings/editModals/edit-notice-category-modal/edit-notice-category-modal.module';
import { AgmCoreModule } from '@agm/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MoreDetailsTodaysLecturesPopoverPageModule } from './office/dashboard/more-details-todays-lectures-popover/more-details-todays-lectures-popover.module';
import { MoreDetailsLecturesPopoverPageModule } from './office/dashboard/more-details-lectures-popover/more-details-lectures-popover.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireAuthModule,
    NgCalendarModule,
    MaterialModule,
    NgxMaterialTimepickerModule,
    DegreeProgramsModalPageModule,
    EditModuleModalPageModule,
    MoreDetailsModulePopoverPageModule,
    MoreDetailsLecturerPopoverPageModule,
    EditLectureSessionModalPageModule,
    MoreDetailsSessionPopoverPageModule,
    EditLectureHallModalPageModule,
    NotificationsPopoverPageModule,
    EditLectureSeriesModalPageModule,
    EditUserAccountStatusModalPageModule,
    UpdateAccountPasswordModalPageModule,
    UpdateAccountDetailsModalPageModule,
    MoreInformationPopoverPageModule,
    EditBatchModalPageModule,
    EditCreditWeightingModalPageModule,
    EditDegreeProgramModalPageModule,
    EditLectureSessionStatusModalPageModule,
    EditNoticeCategoryModalPageModule,
    MoreDetailsTodaysLecturesPopoverPageModule,
    MoreDetailsLecturesPopoverPageModule,
    AgmCoreModule.forRoot({
      // please get your own API key here: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBUPEFtsVw5kgunMcW62ROdNSxV_zLkxg4',
      libraries: ['geometry']
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    HttpClient,
    AngularFireModule,
    AngularFireDatabase,
    AngularFireMessagingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
