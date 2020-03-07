import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  navCtrl: any;

  constructor(
    private firestore: AngularFirestore
    ) {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log('User is signed in');
      }
      else {
        // No user is signed in.
        console.log('User is NOT signed in');
      }
    });

  }
  
  
  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }
  

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut()
          .then(() => {
            console.log("Log out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return firebase.auth().currentUser;
  }


  /* NSBM iSAM Management System - Lecturers */

  // Retriving the current date and time from the localhost
  currentDT = new Date();
  currentDateTime = this.currentDT.getDate() + "/" + this.currentDT.getMonth() + "/" + this.currentDT.getFullYear() + " " + this.currentDT.getHours() + ":" + this.currentDT.getMinutes() + ":" + this.currentDT.getSeconds();

  

  // Implementation of Registering a new lecturer into the system (firebase authentication)
  lecturerRegistrationDetails(value){
    return new Promise<any>((resolve, reject) => {
      // Adding new record into firebase auth
      firebase.auth().createUserWithEmailAndPassword(value.nsbmEmail, value.confirmPassword)
        .then(

          success => {
            console.log(" Lecturer UserID: " + success.user.uid);

            // Adding lecturer details into firestore
            this.firestore.collection("lecturers").add({
              userID: success.user.uid, // Retrieving UID of newly added user
              name: {
                nameTitle: value.nameTitle,
                firstName: value.firstName,
                middleName: value.middleName,
                lastName: value.lastName,
              },
              faculty: value.faculty,
                    specialization: value.specialization,
              createdInfo: {
                createdBy_PO_uID: "logged in uid",
                createdDateTime: this.currentDateTime,
                createdFaculty: "user faculty"
              }
            })
            resolve(success)
          },      
          error => reject(error)

        )
    })
     
  }

  // Retrieving the registered lecturers from the firestore database
  retrieveRegisteredLecturers(){
    return this.firestore.collection("lecturers").snapshotChanges();
  }

  moduleRegistrationDetails(value){
    return new Promise<any>((resolve, reject) => {

      // Adding module details into firestore
      this.firestore.collection("lecturers").add({
        
        name: {
          nameTitle: value.nameTitle,
          firstName: value.firstName,
          middleName: value.middleName,
          lastName: value.lastName,
        },
        faculty: value.faculty,
              specialization: value.specialization,
        createdInfo: {
          createdBy_PO_uID: "logged in uid",
          createdDateTime: this.currentDateTime,
          createdFaculty: "user faculty"
        }
      })

    })
  }

   /* NSBM iSAM Management System - Lecturers */


}


