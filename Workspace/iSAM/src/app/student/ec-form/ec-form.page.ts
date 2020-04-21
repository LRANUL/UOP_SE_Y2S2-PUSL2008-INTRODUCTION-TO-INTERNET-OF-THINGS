import {Router} from '@angular/router';
import { NavController, LoadingController, AlertController, ToastController} from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import 'firebase';
@Component({selector: 'app-ec-form', templateUrl: './ec-form.page.html', styleUrls: ['./ec-form.page.scss']})
export class EcFormPage implements OnInit {

    Name: any;
    LecturerEmail: any;
    Message: any;
    Faculty: any;
    ngOnInit() {
    }
    constructor(
        public loadingController: LoadingController,
        public alertController: AlertController,
        public toastController: ToastController,public navCtrl: NavController, private router: Router,
        private authService: FirebaseService,
        ) {}

    sendEC() {
        let record = {};
        record['Name'] = this.Name;
        record['Faculty'] = this.Faculty;
        record['LecturerEmail'] = this.LecturerEmail;
        record['Message'] = this.Message;
        record['Email'] = this.authService.userDetails().email;

        this.authService.sendEC(record, this.Faculty, this.LecturerEmail).then(async resp => {
            const toast = await this.toastController.create({
                message: 'Your form has been sent',
                duration: 2000
            });
            toast.present();
        })
            .catch(async error => {
                // console.log(error);
                const toast = await this.toastController.create({
                    message: 'Error in Network, check back later.',
                    duration: 2000
                });
                toast.present();
            });
    }

    goSettings() {
        this.router.navigate(['Student/Settings']);
        // console.log('settings');
    }
    goeSign() {
        this.router.navigate(['Student/eSign']);
        // console.log('Home');
    }
    goECForm() {
        this.router.navigate(['Student/EC-Form']);
        // console.log('EC-Form');
    }
    goAttendence() {
        this.router.navigate(['Student/Attendence']);
        // console.log('Attendence');
    }
    goNotices() {
        this.router.navigate(['Student/Notices']);
        // console.log('settings');
    }

}
