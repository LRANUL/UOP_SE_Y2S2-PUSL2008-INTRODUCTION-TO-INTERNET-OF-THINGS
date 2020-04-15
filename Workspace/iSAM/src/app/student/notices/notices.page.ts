import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({ selector: 'app-notices', templateUrl: './notices.page.html', styleUrls: ['./notices.page.scss'] })
export class NoticesPage implements OnInit {
    Notice: any = '';
    Title: any = '';

    constructor(private router: Router,private route: ActivatedRoute, private menu: MenuController, public navCtrl: NavController) 
 {
     this.Notice = this.route.snapshot.params['Notice'];
 }

 ngOnInit() {
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
