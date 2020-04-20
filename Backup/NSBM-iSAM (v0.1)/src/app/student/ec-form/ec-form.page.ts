import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';

@Component({selector: 'app-ec-form', templateUrl: './ec-form.page.html', styleUrls: ['./ec-form.page.scss']})
export class EcFormPage implements OnInit {

    View : string = "https://ui-avatars.com/api/?name={R}+{L}&background=4287f5&color=fff";
    // get names from DB
    FName : string = null;
    LName : string = null;
    constructor(private menu : MenuController, public navCtrl : NavController, private router : Router) {}

    ngOnInit() {
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

}
