import { HttpClient, HttpHandler } from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
import { Geofence } from '@ionic-native/geofence/ngx';
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
import { FCM } from '@ionic-native/fcm/ngx';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgCalendarModule  } from 'ionic2-calendar';
import { EditLectureSessionModalPageModule } from './office/semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.module';
import { MoreDetailsSessionPopoverPageModule } from './office/semester-calendar/more-details-session-popover/more-details-session-popover.module';
import { EditLectureHallModalPageModule } from './office/settings/editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.module';
import { NotificationsPopoverPageModule } from './office/notifications-popover/notifications-popover.module';
import { EditLectureSeriesModalPageModule } from './office/semester-calendar/edit-lecture-series-modal/edit-lecture-series-modal.module';


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
    DegreeProgramsModalPageModule,
    EditModuleModalPageModule,
    MoreDetailsModulePopoverPageModule,
    MoreDetailsLecturerPopoverPageModule,
    EditLectureSessionModalPageModule,
    MoreDetailsSessionPopoverPageModule,
    EditLectureHallModalPageModule,
    NotificationsPopoverPageModule,
    EditLectureSeriesModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    Geofence,
    HttpClient,
    AngularFireModule,
    AngularFireDatabase,
    AngularFireMessagingModule,
    FormsModule,
    ReactiveFormsModule,
    FCM,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
