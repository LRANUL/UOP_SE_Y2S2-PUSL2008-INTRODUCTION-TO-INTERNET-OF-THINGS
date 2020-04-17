import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { SideMenuPage } from '../side-menu/side-menu.page';



@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.page.html',
  styleUrls: ['./lecturers.page.scss'],
})
export class LecturersPage implements OnInit {

  lecturerRegistrationForm: FormGroup;

  showLoadingDots: Boolean = true;

  loggedInUserFaculty;


  constructor(
    private lecturersService: FirebaseService,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private sideMenuPageUserFaculty: SideMenuPage
  ) { }

  ngOnInit() {

    this.loggedInUserFaculty = this.sideMenuPageUserFaculty.passLoggedInUserFaculty();

    this.retrieveRegisteredLecturers();

    this.retrievePublishedUserStatuses();

    // Setting loading dots to false after the contents has loaded.
    this.lecturersService.retrieveRegisteredLecturers().subscribe(() => this.showLoadingDots = false)

    this.lecturerRegistrationForm = this.formBuilder.group({
      nsbmLecturerId: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      nameTitle: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl(''),
      lastName: new FormControl('', Validators.required),
      specialization: new FormControl('', Validators.required),
      specializedFaculty: new FormControl('', Validators.required),
      nsbmEmail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(25)
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(25)
      ])),
      lecturerStatus: new FormControl('', Validators.required),
      termsAndConditionsAgreement: new FormControl('', Validators.required)
    });

  }
  

  // Retrieving registered lecturer users and assigning them
  registeredLecturers;
  retrieveRegisteredLecturers = () => 
    this.lecturersService.retrieveRegisteredLecturers().subscribe(response => (this.registeredLecturers = response));

  // Retrieving user statuses from the firestore database
  publishedUserStatuses;
  retrievePublishedUserStatuses = () => 
    this.lecturersService.retrievePublishedUserStatuses().subscribe(response => (this.publishedUserStatuses = response));



  // Alert Box Implementation
  async alertnotice ( title: string, content: string ) {

    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });

    await alert.present();

  }


  // Process of opening show terms and conditions modal
  showTermsAndCondtions() {
    console.log("Modal");
  }


  doLecturerRegistration(value) {


    if(value.password == value.confirmPassword){
      // Firebase auth
      this.lecturersService.lecturerRegistrationDetails(value, this.sideMenuPageUserFaculty.passLoggedInUserId(), this.loggedInUserFaculty)
        .then(success => {
          console.log(" (Firebase Auth) Lecturer Credentials Registration Successful, " + success);

          // Displaying new leaturer user created confirmation in alert message 
          this.alertnotice('Lecturer Registration Successful', 'New lecturer has been registered. New record can be viewed from the "Registered Lecturers" section.');
          this.alertnotice('Alert', 'New user will be logged in.');

          console.log(success);
        }, 
        error => {
          console.log(" (Firebase Auth) Lecturer Credentials Registration Failed, " + error);

          if(error == "Error: The email address is already in use by another account."){
            console.log(" NSBM email already inuse by another registered user(lecturer account) ");

            // Displaying entered email already exists error in alert message 
            this.alertnotice('NSBM Email Already Exists', 'Another user with the same NSBM email address already exists.');
          }
          else{
            // Displaying new leaturer user created failure in alert message 
            this.alertnotice('Lecturer Registration Failed', 'Error has occured, please contact web administrator');
          }
          
        });
    }
    else{
      this.lecturerRegistrationForm.invalid;

      console.log(" Entered passwords do not match ");

      // Displaying entered passwords not similar error in alert message 
      this.alertnotice('Passwords Mismatch', 'Entered passwords do not match, please re-check.');
    }

  }

}
