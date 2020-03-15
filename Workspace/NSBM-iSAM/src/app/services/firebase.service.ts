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
  Date: Date = new Date();  
  userEmail: any;
  authService: any;
  constructor(
    private firestore: AngularFirestore
    ) {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
    
        this.userEmail = this.authService.userDetails().email;
        console.log('User is signed in');
      }
      else {
        // No user is signed in.
        console.log('User is NOT signed in');
      }
    });

  }
  studentUsers() {
    if (this.authService.userDetails()) {
      this.userEmail = this.authService.userDetails().email;
    return this.firestore.collection('studentUsers').doc(this.userEmail).snapshotChanges();
    }
  }
  
  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
      var user = firebase.auth().currentUser;
      return new Promise<any>((resolve, reject) => {
        console.log('Student Record Stored')
        this.firestore.collection('studentUsers').doc(value.email).set({
          name:{
            firstName: value.fName,
            middleName: value.mName,
            lastName: value.lName
          },
          Email: value.email,
          nsbmStudentID: value.sid,
          degree: value.degree,
          batch: value.batch,
          uID: user.uid,
          createdDateTime: new Date(),
          // ServerTime:firebase.firestore.FieldValue.serverTimestamp(),
          edited:{
          editedByUID:[user.uid],
          editedDateTime: [new Date()],
          editedSection: ["Initial Register"]
          },
          sessionDateTime:{
            loginDateTime: [new Date()],
            logoutDateTime: [new Date()]
          },
          faculty: value.faculty,
          status:"active"

        })
          .then(
            (res) => {
              resolve(res)
            },
            err => reject(err)
          )
      })
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
                firstName: value.firstName,
                middleName: value.middleName,
                lastName: value.lastName,
              },
              specialization: value.specialization,
              faculty: value.faculty
            })
          },
          error => reject(error)

        )
    })
     
  }

}


