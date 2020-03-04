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


