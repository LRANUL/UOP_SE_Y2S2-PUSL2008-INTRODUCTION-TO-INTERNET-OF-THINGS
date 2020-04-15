import {Router} from '@angular/router';
import { NavController, LoadingController, AlertController, ToastController} from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import 'firebase';
@Component({selector: 'app-ec-form', templateUrl: './ec-form.page.html', styleUrls: ['./ec-form.page.scss']})
export class EcFormPage implements OnInit {

    validations_form: FormGroup;
    errorMessage: string = '';
    successMessage: string = '';

    validation_messages = {
        email: [
            { type: "required", message: "Your NSBM University Email is required." },
            { type: "pattern", message: "Please enter a valid email." }
        ]
    };
    userEmail: string;

    ngOnInit() {
        this.userEmail = this.authService.userDetails().email;

        this.validations_form = this.formBuilder.group({
            fName: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z]+$')
            ])),
            lName: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z]+$')
            ])),
            email: new FormControl('', Validators.compose([
                Validators.nullValidator,
                Validators.pattern('')
            ])),
            message: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('')
            ])),
           
        });
    }
    constructor(
        public loadingController: LoadingController,
        public alertController: AlertController,
        public toastController: ToastController,public navCtrl: NavController, private router: Router,
        private authService: FirebaseService,
        private formBuilder: FormBuilder,
        ) {}

    sendEC(value) {
        this.authService.sendEC(value)
            .then(async res => {
                console.log(res);
                this.errorMessage = "";
                const toast = await this.toastController.create({
                    message: 'Your form has been sent',
                    duration: 2000
                });
                toast.present();
            }, async err => {
                console.log(err);
                this.errorMessage = err.message;
                this.successMessage = "";
                    const toast = await this.toastController.create({
                        message: 'Error in Network, check back later.',
                        duration: 2000
                    });
                    toast.present();
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
