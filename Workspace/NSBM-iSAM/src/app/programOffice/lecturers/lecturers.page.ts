import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.page.html',
  styleUrls: ['./lecturers.page.scss'],
})
export class LecturersPage implements OnInit {

  lecturerRegistrationForm: FormGroup;

  constructor(
    private lecturerReg: FirebaseService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.lecturerRegistrationForm = this.formBuilder.group({
      firstName: new FormControl(''),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      specialization: new FormControl(''),
      faculty: new FormControl(''),
      nsbmEmail: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      confirmPassword: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

  }

  doLecturerRegistration(value) {

    // Firebase auth
    this.lecturerReg.lecturerRegistrationDetails(value)
      .then(success => {
        console.log(" (Firebase Auth) Lecturer Credentials Registration Successful, " + success);
      }, 
      error => {
        console.log(" (Firebase Auth) Lecturer Credentials Registration Failed, " + error);
      });
  
  }

}
