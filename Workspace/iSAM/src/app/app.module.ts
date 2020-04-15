import { HttpClient, HttpHandler } from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
import { Geofence } from '@ionic-native/geofence/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/database/';
import { FCM } from '@ionic-native/fcm/ngx';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase)],
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
