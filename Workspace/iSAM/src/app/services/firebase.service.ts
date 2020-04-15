import { async } from '@angular/core/testing';
import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({providedIn: 'root'})
export class FirebaseService {

   
    navCtrl : any;
    Date : Date = new Date();
    authService : any;
    constructor(private firestore : AngularFirestore) {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) { // User is signed in.
                var user = firebase.auth().currentUser;
                if (user != null) {
                    user.providerData.forEach(function (profile) {
                        console.log("Sign-in provider: " + profile.providerId);
                        console.log("  Provider-specific UID: " + profile.uid);
                        console.log("  Name: " + profile.displayName);
                        console.log("  Email: " + profile.email);
                        const userEmail = profile.email;
                        const displayName = profile.displayName;
                        console.log("  Photo URL: " + profile.photoURL);
                    });
                }
            } else { // No user is signed in.
                console.log('User is NOT signed in');
            }
        });

    }
    studentUsers() {
        var user = firebase.auth().currentUser;
        if (user != null) {
            user.providerData.forEach(function (profile) {
                this.displayName = this.authService.currentUser.displayName;
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                const userEmail = profile.email;
                const displayName = profile.displayName;
                console.log("  Photo URL: " + profile.photoURL);
                return this.firestore.collection('studentUsers').doc(this.displayName).snapshotChanges();
            });
        }
    }
    sendEC(value){
        var user = firebase.auth().currentUser;
        return new Promise<any>((resolve, reject) => {
            console.log('EC Form Stored')
            this.firestore.collection('EC-Forms').doc(user.email).set({
                name: {
                    firstName: value.fName,
                    lastName: value.lName
                },
                Email: user.email,
                message: value.message,
                Status: 'Still NOt Checked',

            }).then((res) => {
                resolve(res)
            }, err => reject(err))
        })
  
    }
    registerUser(value) {
        return new Promise<any>((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(res => resolve(res), err => reject(err))
            var user = firebase.auth().currentUser;
            return new Promise<any>((resolve, reject) => {
                console.log('Student Record Stored')
                this.firestore.collection('studentUsers').doc(value.email).set({
                    name: {
                        firstName: value.fName,
                        middleName: value.mName,
                        lastName: value.lName
                    },
                    Email: value.email,
                    nsbmStudentID: value.sid,
                    degree: value.degree,
                    batch: value.batch,
                    uID: value.email,
                    createdDateTime: new Date(),
                    // ServerTime:firebase.firestore.FieldValue.serverTimestamp(),
                    edited: {
                        editedByUID: [value.email],
                        editedDateTime: [new Date()],
                        editedSection: ["Initial Register"]
                    },
                    sessionDateTime: {
                        loginDateTime: [new Date()],
                        logoutDateTime: [new Date()]
                    },
                    faculty: value.faculty,
                    status: "active"

                }).then((res) => {
                    resolve(res)
                }, err => reject(err))
            })
        })

    }


    loginUser(value) {
        return new Promise<any>((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(res => resolve(res), err => reject(err))
        })
    }

    logoutUser() {
        return new Promise((resolve, reject) => {
            if (firebase.auth().currentUser) {
                firebase.auth().signOut().then(() => {
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
lecturerRegistrationDetails(value) {
    return new Promise<any>((resolve, reject) => { // Adding new record into firebase auth
        firebase.auth().createUserWithEmailAndPassword(value.nsbmEmail, value.confirmPassword).then(success => {
            console.log(" Lecturer UserID: " + success.user.uid);

            // Adding lecturer details into firestore
            this.firestore.collection("lecturerUsers").doc(value.nsbmEmail).set({
                userID: success.user.uid, // Retrieving UID of newly added user
                name: {
                    nameTitle: value.nameTitle,
                    firstName: value.firstName,
                    middleName: value.middleName,
                    lastName: value.lastName
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
        }, error => reject(error))
    })

}

// Retrieving the registered lecturers from the firestore database
retrieveRegisteredLecturers() {
    return this.firestore.collection("lecturerUsers").snapshotChanges();
}

// Creating new firestore document and adding new module details
moduleRegistrationDetails(value) {
    return new Promise<any>((resolve, reject) => { // Adding module details into firestore
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
retrieveRegisteredModules() {
    return this.firestore.collection("modules").snapshotChanges();
}

/* NSBM iSAM Management System - Lecturers Tab */


/* NSBM iSAM Management System - Notices Tab */

// Creating new firestore document and adding new notice data into ths document
newStudentNoticeDetailsSubmission(value) {

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
retrieveSentStudentNotices() {
    return this.firestore.collection("notice-PO-To-Student").snapshotChanges();
}


/* NSBM iSAM Management System - Notices Tab */}
