import { FirebaseService } from './../../services/firebase.service';
import {Component, OnInit} from '@angular/core';
import {MenuController, NavController, LoadingController, AlertController, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore/';

@Component({selector: 'app-settings', templateUrl: './settings.page.html', styleUrls: ['./settings.page.scss']})
export class SettingsPage implements OnInit {
    userEmail: string;
    constructor(private firestore: AngularFirestore,
        private authService: FirebaseService,
        public loadingController: LoadingController,
        public alertController: AlertController,
        public toastController: ToastController, private router: Router, private menu : MenuController, public navCtrl : NavController) {}

    ngOnInit() {
        if (this.authService.userDetails()) {
            this.userEmail = this.authService.userDetails().email;
        } else {
            this.navCtrl.navigateBack("");
        }
    }


    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Change Password',
            inputs: [
                {
                    name: 'password',
                    type: 'password',
                    placeholder: 'New Password'

                },
            ],
            message: this.authService.userDetails().email,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        // console.log('Confirm Cancel');
                    }
                },
                {
                    text: 'Change',
                    handler: async (alertData) => {
                        var user = firebase.auth().currentUser;
                        var newPassword = alertData.password;
                        user.updatePassword(newPassword).then(async function () {
                            // console.log('Password Updated')

                        }
                        ).catch(function (error) {
                            // An error happened.
                        });
                        const toast = await this.toastController.create({
                            message: 'Your password has been updated.',
                            duration: 2000
                        });
                        toast.present();
                    }
                }
            ]
        });

        await alert.present();
    }

    async logout() {
        this.firestore.collection('/users/userTypes/studentUsers').doc(this.authService.userDetails().uid).set({
            Activity: 'Offline',
        }, { merge: true });
        this.authService
            .logoutUser()
            .then(async res => {
                // console.log(res);
                const loading = await this.loadingController.create({
                    message: 'Logging out...',
                    duration: 2000
                });
                await loading.present();

                const { role, data } = await loading.onDidDismiss();
                // console.log('Loading dismissed!');

                this.navCtrl.navigateBack("");
            })
            .catch(error => {
                // console.log(error);
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
