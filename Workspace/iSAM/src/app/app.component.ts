import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NoticesPage } from './office/notices/notices.page';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    /* CURRENTLY UNDER DEVELOPMENT, WILL BE USING STUDENT BATCH OR EMAIL FOR NOTICES*/
    //   this.messaging.getToken().then(token => {
    //     console.log(token);
    //   this.messaging.subscribeToTopic('student');

    
    // });
    //   this.messaging.onNotification().subscribe(data => {
    //     console.log(data);
    //     if (data.wasTapped) {

    //       console.log('Received in background');
    //       this.router.navigate([NoticesPage, data.notice]);
    //     } else {
    //       console.log('Received in foreground');
    //       this.router.navigate([NoticesPage, data.notice]);
    //     }
    //   });

    //   this.messaging.onTokenRefresh().subscribe(token => {
    //     console.log(token);
    //   });
      /*STUDENT NOT ALLOWED TO MANAGE CLOUD SUBSCRIPTION ! (NOTIFICATIONS CAN BE DISABLED LOCALLY)
      SUSCRIPTION MANAGEMENT FOR PROGRAM OFFICE BELOW
      
      this.messaging.unsubscribeFromTopic('student');

      */
    });
  }
}
