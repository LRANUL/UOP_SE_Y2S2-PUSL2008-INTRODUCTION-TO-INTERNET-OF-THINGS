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


  /* NSBM iSAM Management System - Lecturers Tab */

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
            this.firestore.collection("lecturerUsers").doc(value.nsbmEmail).set({
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
    return this.firestore.collection("lecturerUsers").snapshotChanges();
  }

  // Creating new firestore document and adding new module details 
  moduleRegistrationDetails(value){
    return new Promise<any>((resolve, reject) => {

      // Adding module details into firestore
      this.firestore.collection("modules").doc(value.moduleCode).set({
        moduleTitle: value.moduleTitle,
        creditsWeighting: value.creditsWeighting,
        faculty: value.faculty,
        program: value.program,
        moduleLeader: value.moduleLeader,
        teachingStaff_DocID: value.teachingStaff
      })

    })
  }

  // Retrieving the registered modules from the firestore database
  retrieveRegisteredModules(){
    return this.firestore.collection("modules").snapshotChanges();
  }

  /* NSBM iSAM Management System - Lecturers Tab */
  
  







  /* NSBM iSAM Management System - Notices Tab */

  // Creating new firestore document and adding new notice data into ths document
  newStudentNoticeDetailsSubmission(value){
    
    this.firestore.collection("notices-PO-To-Students").add({
      noticeTitle: value.noticeTitle,
      noticeDescription: value.noticeDescription,
      noticeCategory: value.noticeCategory,
      noticeRecipient: {
        noticeRecipientModule: value.noticeRecipientModule,
        noticeRecipientBatch: value.noticeRecipientBatch
      },
      noticeCreatedInfo: {
        createdByDocID: "User Doc ID",
        createdByFaculty: value.noticeAuthor,
        createdDateTime: this.currentDateTime
      }
    })

  }

  // Retrieving the sent student notices from the firestore database
  retrieveSentStudentNotices(){
    return this.firestore.collection("notice-PO-To-Student").snapshotChanges();
  }





  /* NSBM iSAM Management System - Notices Tab */


}


