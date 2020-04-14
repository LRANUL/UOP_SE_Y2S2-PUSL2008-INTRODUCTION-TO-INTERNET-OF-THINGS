import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.page.html',
  styleUrls: ['./lecturers.page.scss'],
})
export class LecturersPage implements OnInit {

  lecturerRegistrationForm: FormGroup;

  showLoadingDots: Boolean = true;

  constructor(
    private fbService: FirebaseService,
    private fireStore: AngularFirestore,
    private formBuilder: FormBuilder,
    private alertController: AlertController 
  ) { }

  ngOnInit() {

    this.retrieveRegisteredLecturers();

    // Setting loading dots to false after the contents has loaded.
    this.fbService.retrieveRegisteredLecturers().subscribe(() => this.showLoadingDots = false)

    this.lecturerRegistrationForm = this.formBuilder.group({
      nameTitle: new FormControl(''),
      firstName: new FormControl(''),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      specialization: new FormControl(''),
      faculty: new FormControl(''),
      nsbmEmail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
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
      ]))
    });

  }


  // Retrieving registered lecturer users and assigning them
  registeredLecturers;
  retrieveRegisteredLecturers = () => 
    this.fbService.retrieveRegisteredLecturers().subscribe(response => (this.registeredLecturers = response));




  // Alert Box Implementation
  async alertnotice ( title: string, content: string ) {

    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });

    await alert.present();

  }


  doLecturerRegistration(value) {


    if(value.password == value.confirmPassword){
      // Firebase auth
      this.fbService.lecturerRegistrationDetails(value)
        .then(success => {
          console.log(" (Firebase Auth) Lecturer Credentials Registration Successful, " + success);

          // Displaying new leaturer user created confirmation in alert message 
          this.alertnotice('Lecturer Registration Successful', 'New lecturer has been registered. New record can be viewed from the "Registered Lecturers" section.');

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
