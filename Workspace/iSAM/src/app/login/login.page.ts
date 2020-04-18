import {FirebaseService} from './../services/firebase.service';
import {Component, OnInit} from '@angular/core';
import {NavController, AlertController} from '@ionic/angular';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({ selector: 'app-login', templateUrl: './login.page.html', styleUrls: ['./login.page.scss'] })
export class LoginPage implements OnInit {
    checked: boolean = true;
    validations_form: FormGroup;
    errorMessage: string = '';
    userEmail: string;
    admincheck(): void {
        this.checked = !this.checked;
        console.log("checked: " + this.checked);//it is working !!!
    }
    constructor(private router: Router, public navCtrl: NavController, private authService: FirebaseService, public loadingController: LoadingController, private formBuilder: FormBuilder, ) { }

    ngOnInit() {

    constructor(
        private router: Router,
        public navCtrl : NavController, 
        private authService : FirebaseService, 
        public loadingController : LoadingController, 
        private formBuilder : FormBuilder,
        private alertController: AlertController
    ){}

    ngOnInit() {

        

        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) { // User is signed in.
                console.log('User is signed in');
        //         const loading = await this.loadingController.create({message: 'Please wait...', duration: 2000});
        //         await loading.present();

        //         const {role, data} = await loading.onDidDismiss();
        //         console.log('Loading dismissed!');

                this.userEmail = this.authService.userDetails().email;


                const loggedInUserDetails = this.authService.userDetails();

                /* Redirecting the user to their relevant user interface according to the user type */
                // Checking if logged in user type in a student user
                this.authService.retrieveLoggedInUserDetailsStudent(loggedInUserDetails.uid).subscribe(response => {
                    if(response.length > 0){
                        // this.navCtrl.navigateForward("/dashboard");
                        console.log("Logged In User Type: StudentUser");
                        console.log("Record found in student users collection");
                    }
                    else{
                        console.log("Record not found in student users collection");
                    }
                }, error => {
                    console.log("Error: " + error);
                    this.alertNotice("Error", "An error has occurred: " + error);
                });

                // Checking if logged in user type in a lecturer user
                this.authService.retrieveLoggedInUserDetailsLecturer(loggedInUserDetails.uid).subscribe(response => {
                    if(response.length > 0){
                        //this.navCtrl.navigateForward("/lecturerHome");
                        console.log("Logged In User Type: LecturerUser");
                        console.log("Record found in lecturer users collection");
                    }
                    else{
                        console.log("Record not found in lecturer users collection");
                    }
                }, error => {
                    console.log("Error: " + error);
                    this.alertNotice("Error", "An error has occurred: " + error);
                });

                // Checking if logged in user type in a program office user
                this.authService.retrieveLoggedInUserDetailsProgramOffice(loggedInUserDetails.uid).subscribe(response => {
                    if(response.length > 0){
                        this.router.navigate(['/office/dashboard']);
                        console.log("Logged In User Type: Program Office User");
                        console.log("Record found in program office users collection");
                    }
                    else{
                        console.log("Record not found in program office users collection");
                    }
                }, error => {
                    console.log("Error: " + error);
                    this.alertNotice("Error", "An error has occurred: " + error);
                });
             

            } else { // No user is signed in.
                console.log('User is NOT signed in');

            }
        });
        this.validations_form = this.formBuilder.group({
            email: new FormControl("", Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            password: new FormControl("", Validators.compose([Validators.minLength(5), Validators.required]))
        });
    }

    // Alert Box Implementation
    async alertNotice ( title: string, content: string ) {

        const alert = await this.alertController.create({
        header: title,
        message: content,
        buttons: ['OK']
        });

        await alert.present();
    }

    validation_messages = {
        email: [
            {
                type: "required",
                message: "Your NSBM University Email is required."
            }, {
                type: "pattern",
                message: "Please enter a valid email."
            }
        ],
        password: [
            {
                type: "required",
                message: "Password is required."
            }, {
                type: "minlength",
                message: "Password must be at least 5 characters long."
            }
        ]
    };

    async loginUser(value) {
        const loading = await this.loadingController.create({ message: 'Logging in...', duration: 2000 });

        await loading.present();

        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');

        this.authService.loginUser(value).then(async res => {
            console.log(res);
            this.errorMessage = "";
            this.userEmail = this.authService.userDetails().email;

            // this.router.navigate(['/office/dashboard']);
            // this.router.navigate(['/student/eSign']);
            // this.navCtrl.navigateForward("lecturerHome");
            // this.navCtrl.navigateForward("dashboard");



            const loggedInUserDetails = this.authService.userDetails();

            /* Redirecting the user to their relevant user interface according to the user type */
            // Checking if logged in user type in a student user
            this.authService.retrieveLoggedInUserDetailsStudent(loggedInUserDetails.uid).subscribe(response => {
                if(response.length > 0){
                    // this.navCtrl.navigateForward("/dashboard");
                    console.log("Logged In User Type: StudentUser");
                    console.log("Record found in student users collection");
                }
                else{
                    console.log("Record not found in student users collection");
                }
            }, error => {
                console.log("Error: " + error);
                this.alertNotice("Error", "An error has occurred: " + error);
            });

            // Checking if logged in user type in a lecturer user
            this.authService.retrieveLoggedInUserDetailsLecturer(loggedInUserDetails.uid).subscribe(response => {
                if(response.length > 0){
                    //this.navCtrl.navigateForward("/lecturerHome");
                    console.log("Logged In User Type: LecturerUser");
                    console.log("Record found in lecturer users collection");
                }
                else{
                    console.log("Record not found in lecturer users collection");
                }
            }, error => {
                console.log("Error: " + error);
                this.alertNotice("Error", "An error has occurred: " + error);
            });

            // Checking if logged in user type in a program office user
            this.authService.retrieveLoggedInUserDetailsProgramOffice(loggedInUserDetails.uid).subscribe(response => {
                if(response.length > 0){
                    this.router.navigate(['/office/dashboard']);
                    console.log("Logged In User Type: Program Office User");
                    console.log("Record found in program office users collection");
                }
                else{
                    console.log("Record not found in program office users collection");
                }
            }, error => {
                console.log("Error: " + error);
                this.alertNotice("Error", "An error has occurred: " + error);
            });

        }, err => {
            this.errorMessage = err.message;
        });
    }


    goToRegisterPage() {
        this.navCtrl.navigateForward("signup");
    }

}
