import { Geofence } from '@ionic-native/geofence/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from 'src/environments/environment';
import { FirebaseService } from './services/firebase.service';
import { AngularFireAuthModule } from '@angular/fire/auth';

import * as firebase from "firebase";
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

firebase.initializeApp(environment.firebase);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireAuthModule, ReactiveFormsModule, AngularFireAuthModule,
    AngularFirestoreModule, HttpClientModule,
    AgmCoreModule.forRoot({
      // please get your own API key here: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'GOOGLE_API_KEY',
      libraries: ['geometry']
    }),
    AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseService, Geofence
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
