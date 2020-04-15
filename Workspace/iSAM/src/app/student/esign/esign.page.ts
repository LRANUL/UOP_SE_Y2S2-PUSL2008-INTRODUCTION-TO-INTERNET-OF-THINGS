import { FirebaseService } from 'src/app/services/firebase.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Geofence } from '@ionic-native/geofence/ngx';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({ selector: 'app-esign', templateUrl: './esign.page.html', styleUrls: ['./esign.page.scss'] })

export class EsignPage implements OnInit {

    atNSBM: boolean = false;
    View: string = "https://ui-avatars.com/api/?name={R}+{L}&background=4287f5&color=fff";
    sid: string;
    constructor(private router: Router, private authService: FirebaseService, public navCtrl: NavController, private geofence: Geofence, ) {
        geofence.initialize().then(() => console.log('Location Check Ready'), (err) => console.log(err))
        this.NSBMBorder()
    }
    FName: "Ranul";
    LName: "L";
    ngOnInit() {

        var ref = firebase.database().ref(this.sid);
        ref.orderByChild("firstName").on("child_added", function (snapshot) {
            console.log(snapshot.key);
        });
        this.View = `https://ui-avatars.com/api/?name=` + this.FName + `+` + this.LName + `&background=4287f5&color=fff`;
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


    private NSBMBorder() {
        console.log('Geofence added');
        let fence = {
            id: 'NSBMBorder',
            latitude: 6.820929,
            longitude: 80.039773,
            radius: 55,
            transitionType: 1,
            atNSBM: true
        }

        this.geofence.addOrUpdate(fence).then(() => console.log('Geofence added'), () => console.log('Geofence failed to add'));
        console.log(this.atNSBM);

    }
}
