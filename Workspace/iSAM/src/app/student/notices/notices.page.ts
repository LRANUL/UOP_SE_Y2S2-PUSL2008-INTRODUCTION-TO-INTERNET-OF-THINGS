import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore/';

@Component({ selector: 'app-notices', templateUrl: './notices.page.html', styleUrls: ['./notices.page.scss'] })
export class NoticesPage implements OnInit {
    
    title;
    notices: any;
    ngOnInit() {
        this.firebase.fetchNotice().subscribe(data => {

            this.notices = data.map(e => {
                return {
                    noticeTitle: e.payload.doc.data()['noticeTitle'],
                    noticeDescription: e.payload.doc.data()['noticeDescription'],
                };
            })
            console.log(this.notices);

        });
    }

    constructor(private firestore: AngularFirestore,private firebase: FirebaseService, private router: Router, private route: ActivatedRoute, private menu: MenuController, public navCtrl: NavController) {

    }

    goSettings() {
        this.router.navigate(['Student/Settings']);
        console.log('settings');
    }
    goeSign() {
        this.router.navigate(['Student/eSign']);
        console.log('Home');
    }
    goECForm() {
        this.router.navigate(['Student/EC-Form']);
        console.log('EC-Form');
    }
    goAttendence() {
        this.router.navigate(['Student/Attendence']);
        console.log('Attendence');
    }
    goNotices() {
        this.router.navigate(['Student/Notices']);
        console.log('settings');
    }

}
