import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import { ThrowStmt } from '@angular/compiler';
import { parse } from 'querystring';


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
                return this.firestore.collection('users/userTypes/studentUsers').doc(this.displayName).snapshotChanges();
            });
        }
    }

    registerUser(value) {
        return new Promise<any>((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(success => {

                console.log('Student Record Stored')
                this.firestore.collection('users/userTypes/studentUsers/').doc(success.user.uid).set({
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

                })
                resolve(success);
            }, error => reject(error))

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

    fetchNotice() {
        return this.firestore.collection('notices/noticeTypes/notices-PO-To-Students').snapshotChanges();
    }

    sendEC(record, faculty, lecturer) {
        return this.firestore.collection('EC-Forms/' + faculty + '/' + lecturer).add(record);
    }

    sendAttendance(record, uid, module, email) {
        return this.firestore.firestore.collection('Attendance/History/' + module).doc(email).set({
            data: {
                Module: module,
                Attendace: firebase.firestore.FieldValue.increment(1),
            },

        })

        // this.firestore.collection('Attendance / History /'+module+'/'+email).add(record);

    }
    fetchSession(Batch, Faculty, LectureDate, DegreeCode) {
        //faculties/School of Business/lectureSeries/undergraduate/11.1/SE/19-4-2020/
        return this.firestore.collection('faculties').doc(Faculty).collection('lectureSessions').doc('undergraduate').collection(Batch).doc(DegreeCode).collection(LectureDate).snapshotChanges();

    }
    loadEC() {

        return this.firestore.collection('EC-Forms').snapshotChanges();
    }

    updateEC(value) {
        this.firestore.collection('EC-Forms/Done' + value.email + '').add(value);
    }

   


    /* Retrieving details from the documents to identify the type of user */

    // Retrieving the details of the logged in user from firestore database with the use of firebase authentication Uid
    retrieveLoggedInUserDetailsStudent(Uid){
        return this.firestore.collection("users/userTypes/studentUsers", ref => ref.where(firebase.firestore.FieldPath.documentId(), '==', Uid)).snapshotChanges();
    }

    // Retrieving the details of the logged in user from firestore database with the use of firebase authentication Uid
    retrieveLoggedInUserDetailsLecturer(Uid){
        return this.firestore.collection("users/userTypes/lecturerUsers", ref => ref.where(firebase.firestore.FieldPath.documentId(), '==', Uid)).snapshotChanges();
    }

    // Retrieving the details of the logged in user from firestore database with the use of firebase authentication Uid
    retrieveLoggedInUserDetailsProgramOffice(Uid){
        return this.firestore.collection("users/userTypes/programOfficeUsers", ref => ref.where(firebase.firestore.FieldPath.documentId(), '==', Uid)).snapshotChanges();
    }

    


    // Retriving the current date and time from the localhost
    currentDT = new Date();
    currentDateTime = this.currentDT.getDate() + "/" + this.currentDT.getMonth() + "/" + this.currentDT.getFullYear() + " " + this.currentDT.getHours() + ":" + this.currentDT.getMinutes() + ":" + this.currentDT.getSeconds();

    // Implementation of Registering a new lecturer into the system (firebase authentication)
    lecturerRegistrationDetails(value, loggedInUserId, loggedInUserFaculty) {
        return new Promise<any>((resolve, reject) => { // Adding new record into firebase auth
      
            firebase.auth().createUserWithEmailAndPassword(value.nsbmEmail, value.confirmPassword).then(success => {
                console.log(" Lecturer UserID: " + success.user.uid);

                // Adding lecturer details into firestore
                this.firestore.collection("users/userTypes/lecturerUsers/").doc(success.user.uid).set({
                    nsbmEmailAddress: value.nsbmEmail, // Retrieving UID of newly added user
                    nsbmLecturerId: value.nsbmLecturerId,
                    name: {
                        prefix: value.nameTitle,
                        firstName: value.firstName,
                        middleName: value.middleName,
                        lastName: value.lastName
                    },
                    specializedFaculty: value.specializedFaculty,
                    specialization: value.specialization,
                    createdDetails: {
                        createdBy_PO_uID: loggedInUserId,
                        createdDateTime: new Date(),
                        createdFaculty: loggedInUserFaculty
                    },
                    editedDetails: {
                        editedByUid: "Registration Phase",
                        editedDateTime: new Date(),
                        editedSection: "Registration Phase"
                    },
                    sessionDetails: {
                        loginDateTime: [new Date()],
                        logoutDateTime: [new Date()]
                    },
                    status: value.lecturerStatus
                });
                resolve(success);
            }, error => reject(error))
            
        })
    }


    // Registering new module by adding the user provided details into the firestore database
    registerModule(userFaculty, value, userFormAwardingBodyUniversity){
        // Creating an ID for the document
        const docId = this.firestore.createId();

        return this.firestore.collection("faculties/"+ userFaculty +"/modules").doc(docId).set({
        moduleCode: value.moduleCode,
        moduleTitle: value.moduleTitle,
        creditsWeighting: value.creditsWeighting,
        degree: value.degreeProgram,
        awardingBodyUniversity: userFormAwardingBodyUniversity,
        academicPeriod: {
            academicYear: value.academicPeriodYear,
            academicSemester: value.academicPeriodSemester
        },
        moduleLeader: value.moduleLeader,
        assignedLecturer: value.assignedLecturer,
        assignedLectureHall: value.assignedLectureHall
        }).then(function() {
        console.log("Module registerd and values were added");
        });
    }


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

    // Adding new lecture session by creating a new document
    addNewLectureSession(userFaculty, value, awardingBodyUniversity, moduleTitle, sessionDate, sessionStartDateTime, sessionEndDateTime){
        // Firestore pathway:
        // faculties/ <facultyName> /lectureSessions/undergraduate/ <batch> / <degreeProgram> / <date> / <Module> /
        // Sample: /faculties/School of Computing/lectureSessions/undergraduate/16.1/BSc(Hons) Networking, University of Plymouth/2020-3-20/SOFT255SL-Software Engineering with Java
        /*
        this.firestore.collection("faculties/"+ userFaculty +"/lectureSessions/undergraduate/"+ value.batch + "/"+
            value.degreeProgram +", "+ awardingBodyUniversity +"/"+ sessionDate +"/").doc(value.module +"-"+ moduleTitle).set({
                academicSemester: parseInt(value.academicPeriodSemester),
                academicYear: parseInt(value.academicPeriodYear),
                degree: value.degreeProgram,
                awardingBodyUniversity: awardingBodyUniversity,
                batch: value.batch,
                startDateTime: new Date(sessionStartDateTime),
                endDateTime: new Date(sessionEndDateTime),
                lectureHall: value.lectureHall,
                lecturer: value.lecturer,
                moduleCode: value.module,
                moduleTitle: moduleTitle,
                status: value.status
        });*/

        this.firestore.collection("faculties/"+ userFaculty +"/allLectureSessions/").add({
                academicSemester: parseInt(value.academicPeriodSemester),
                academicYear: parseInt(value.academicPeriodYear),
                degree: value.degreeProgram,
                awardingBodyUniversity: awardingBodyUniversity,
                batch: value.batch,
                startDateTime: new Date(sessionStartDateTime),
                endDateTime: new Date(sessionEndDateTime),
                lectureHall: value.lectureHall,
                lecturer: value.lecturer,
                moduleCode: value.module,
                moduleTitle: moduleTitle,
                status: value.status
        });


    }

    // Adding new lecture series by creating a new document
    createNewLectureSeries(value, userFaculty, awardingBodyUniversity, moduleTitle){
        this.firestore.collection("faculties/"+ userFaculty +"/lectureSeries/").add({
            degree: value.degreeProgram,
            awardingBodyUniversity: awardingBodyUniversity,
            batch: value.batch,
            enrollmentKey: value.enrollmentKey,
            moduleCode: value.module,
            moduleTitle: moduleTitle,
            enrolledStudents: ["Initial Series Creation"]
        });
    }

    // Searching for registered lecturer details with the user entered nsbm id 
    searchRegisteredLecturerNSBMId(nsbmLecturerId){
        return this.firestore.collection("users/userTypes/lecturerUsers/", ref => ref
                .where("nsbmLecturerId", "==", nsbmLecturerId)).snapshotChanges();
    }

    // Searching for registered lecturer details with the user entered nsbm email address
    searchRegisteredLecturerNSBMEmail(nsbmEmailAddress){
        return this.firestore.collection("users/userTypes/lecturerUsers/", ref => ref
                .where("nsbmEmailAddress", "==", nsbmEmailAddress)).snapshotChanges();
    }



    // Retrieving the registered lecturers from the firestore database
    retrieveRegisteredLecturers() {
        return this.firestore.collection("users/userTypes/lecturerUsers/").snapshotChanges();
    }

    // Retrieving the sent student notices from the firestore database
    retrieveSentStudentNotices() {
        return this.firestore.collection("notice-PO-To-Student").snapshotChanges();
    }

    

    // Retrieving published degree programs and their details from the firestore database
    retrievePublishedDegreeProgram(userFaculty) {
        return this.firestore.collection("faculties/"+ userFaculty +"/degreePrograms").snapshotChanges();
    }

    // Retrieving the awardingBodyUniversity from the selected degree from the firestore database
    retrievingAwardingBodyUniversityOfDegree(degree, userFaculty){
        return this.firestore.collection("faculties/"+ userFaculty +"/degreePrograms", ref => ref
                .where("degree", "==", degree)).snapshotChanges();
    }

    // Retrieving published module credits weighting and their details from the firestore database
    retrievePublishedModuleCreditsWeighting() {
        return this.firestore.collection("noOfModuleCreditsWeighting", ref => ref
                .where("status", "==", "Active")).snapshotChanges();
    }

    // Retrieving published user statuses and their details from the firestore database
    retrievePublishedUserStatuses() {
        return this.firestore.collection("userStatuses").snapshotChanges();
    }

    // Retrieving published lecture halls and their details from the firestore database
    retrievePublishedLectureHalls(userFaculty) {
        return this.firestore.collection("faculties/"+ userFaculty +"/lectureHalls").snapshotChanges();
    }

    // Retrieving the moduleTitle from the selected module title from the firestore database
    retrievingModuleTitleOfModuleCode(moduleCode, userFaculty){
        return this.firestore.collection("faculties/"+ userFaculty +"/modules", ref => ref
                .where("moduleCode", "==", moduleCode)).snapshotChanges();
    }

    // Retrieving published lecture session statuses and their details from the firestore database
    retrievePublishedLectureSessionStatuses() {
        return this.firestore.collection("lectureSessionStatuses").snapshotChanges();
    }

    // Retrieving registered modules and their details from the firestore database
    retrieveRegisteredModules(userFaculty) {
        return this.firestore.collection("faculties/"+ userFaculty +"/modules").snapshotChanges();
    }

    // Retrieving published lecture series and their details from the firestore database
    retrievePublishedLectureSeries(userFaculty, value, awardingBodyUniversity, moduleTitle){
        return this.firestore.collection("faculties/"+ userFaculty +"/lectureSeries/", ref => ref 
                .where("degree", "==", value.degreeProgram)
                .where("awardingBodyUniversity", "==", awardingBodyUniversity)
                .where("moduleCode", "==", value.module)
                .where("moduleTitle", "==", moduleTitle)
                .where("batch", "==", value.batch)).snapshotChanges();
    }


    
    // Retrieving registered module and their details from the firestore database for the module page (Module Code)
    retrieveRegisterdModulesModuleCode(userFaculty, value){
        return this.firestore.collection("faculties/"+ userFaculty +"/modules", ref => ref 
                .where("moduleCode", "==", value)).snapshotChanges();
    } 

    // Retrieving registered module and their details from the firestore database for the module page (Module Title)
    retrieveRegisterdModulesModuleTitle(userFaculty, value){
        return this.firestore.collection("faculties/"+ userFaculty +"/modules", ref => ref 
                .where("moduleTitle", "==", value)).snapshotChanges();
    }

    // Retrieving registered module and their details from the firestore database for the module page (Degree Program)
    retrieveRegisterdModulesDegreeProgram(userFaculty, userSelectedDegree, userSelectedAwardingBodyUniversity){
        return this.firestore.collection("faculties/"+ userFaculty +"/modules", ref => ref 
                .where("degree", "==", userSelectedDegree)
                .where("awardingBodyUniversity", "==", userSelectedAwardingBodyUniversity)).snapshotChanges();
    }



    // Retrieving published batches and their details from the firestore database
    retrievePublishedBatch(userFaculty) {
        return this.firestore.collection("faculties/"+ userFaculty +"/batches").snapshotChanges();
    }

    // Retrieving published lecture session and their detais from the firestore database for the semester calendar page
    retrievePublishedLectureSessionsSemesterCalendar(userFaculty, value, awardingBodyUniversity) {
        return this.firestore.collection("faculties/"+ userFaculty +"/allLectureSessions/", ref => ref
                .where("batch", "==", value.batch)
                .where("degree", "==", value.degreeProgram)
                .where("awardingBodyUniversity", "==", awardingBodyUniversity)
                .where("academicYear", "==", parseInt(value.academicPeriodYear)) /* ( parseInt() ) Converting value data type from the form, string to int */
                .where("academicSemester", "==", parseInt(value.academicPeriodSemester)))
                .snapshotChanges();
    }

    
    // Updating module values in the firestore database
    updateModule(userFaculty, docId, value, userFormDataAwardingBodyUniversity) {
        return this.firestore.doc("faculties/"+ userFaculty +"/modules/"+ docId).update({
        moduleCode: value.moduleCode,
        moduleTitle: value.moduleTitle,
        creditsWeighting: value.creditsWeighting,
        degree: value.degreeProgram,
        awardingBodyUniversity: userFormDataAwardingBodyUniversity,
        academicPeriod: {
            academicYear: value.academicPeriodYear,
            academicSemester: value.academicPeriodSemester,
        },
        moduleLeader: value.moduleLeader,
        assignedLecturer: value.assignedLecturer,
        assignedLectureHall: value.assignedLectureHall
        }).then(function() {
        console.log("Module Details has been updated.");
        });
    }

    // Updating lecture session values in the firestore database
    updateLectureSession(userFaculty, id, value, userFormDataModuleCode, userFormDataSessionStartDateTime, userFormDataSessionEndDateTime) {
        return this.firestore.doc("faculties/"+ userFaculty +"/lectureSessions/"+ id).update({
        batch: value.batch,
        degreeProgram: value.degreeProgram,
        academicYear: value.academicYear,
        academicSemester: value.academicSemester,
        moduleCode: userFormDataModuleCode,
        moduleTitle: value.moduleTitle,
        lecture: value.lecturer,
        lectureHall: value.lectureHall,
        status: value.lectureStatus,
        startDateTime: userFormDataSessionStartDateTime,
        endDateTime: userFormDataSessionEndDateTime
        }).then(function() {
        console.log("Lecture Session Details has been updated.");
        });
    }


    // Removing registered modules from the firestore database
    removeRegisteredModule(userFaculty, DocId){
        this.firestore.doc("faculties/"+ userFaculty +"/modules/"+ DocId).delete();
    }

    // Removing lecture session from the firestore database
    removeLectureSession(userFaculty, id) {
        return this.firestore.doc("faculties/"+ userFaculty +"/lectureSessions/"+ id).delete();
    }

}

