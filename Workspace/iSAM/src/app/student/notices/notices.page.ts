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
    eventSource = [];
    calendar = {
        mode: 'month',
        currentDate: new Date(),
    };
    selectedDate = new Date();

    ngOnInit() {
        this.firebase.fetchNotice().subscribe(data => {

            this.notices = data.map(e => {
                return {
                    noticeTitle: e.payload.doc.data()['noticeTitle'],
                    noticeDescription: e.payload.doc.data()['noticeDescription'],
                };
            })

        });
    }

    constructor(private firestore: AngularFirestore, private firebase: FirebaseService, private router: Router, private route: ActivatedRoute, private menu: MenuController, public navCtrl: NavController) {
        var Batch: string
        var Faculty: string
        var DegreeCode: string
        this.firestore.collection('/users/userTypes/studentUsers').doc(this.firebase.userDetails().uid).ref.get().then((doc) => {
            if (doc.exists) {
                console.log(doc.data());
                Batch = doc.data().batch.toString()
                Faculty = doc.data().faculty
                DegreeCode = doc.data().DegreeCode
                this.firestore.collection('faculties').doc(Faculty).collection('allLectureSessions').snapshotChanges().subscribe(keys => {
                    this.eventSource = [];
                    keys.forEach(key => {
                        let event:any = key.payload.doc.data();
                        event.id = key.payload.doc.id;
                        event.title = event.moduleTitle + " | At Hall: " + event.lectureHall;
                        event.startTime = event.startDateTime.toDate();
                        event.endTime = event.endDateTime.toDate();
                        this.eventSource.push(event);
                    });
                });

            }
        })
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
