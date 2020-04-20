import {Component, OnInit} from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import * as firebase from 'firebase/app';
import {HttpClient} from '@angular/common/http';
import {MapsAPILoader} from '@agm/core';
import {Geofence} from '@ionic-native/geofence/ngx';
import {FirebaseService} from 'src/app/services/firebase.service';
import {Router} from '@angular/router';

@Component({selector: 'app-attendance', templateUrl: './attendance.page.html', styleUrls: ['./attendance.page.scss']})
export class AttendancePage implements OnInit {

    View : string = "https://ui-avatars.com/api/?name={R}+{L}&background=4287f5&color=fff";
    // get names from DB
    FName : any;
    LName : any;
    atNSBM : boolean;
    constructor(private router : Router, private loader : MapsAPILoader, private http : HttpClient, private authService : FirebaseService, private menu : MenuController, public navCtrl : NavController) {}

    ngOnInit() {
        this.View = `https://ui-avatars.com/api/?name=` + this.FName + `+` + this.LName + `&background=4287f5&color=fff`;
    }
    NSBMBorder() {
        console.log('Geofence added');
        let fence = {
            id: 'NSBMBorder',
            latitude: 6.820929,
            longitude: 80.039773,
            radius: 55,
            transitionType: 1,
            atNSBM: true
        }
    }
    atHall : boolean;


    mark() {
        if (this.atNSBM == true) {
            this.atHall = true;
        } else {
            this.atHall = false;

        }
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
