import { FirebaseService } from 'src/app/services/firebase.service';
import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';

import { AngularFirestore } from '@angular/fire/firestore/';
@Component({ selector: 'app-esign', templateUrl: './esign.page.html', styleUrls: ['./esign.page.scss'] })

export class EsignPage implements OnInit {
    nosession: boolean;
    check: void[];
    signed: boolean;
    session: { id: string; SessionCode: any; Module: string; Session: any; Date: any; Hall: any; Lecturer: any; }[];
    CloudCode: any;
    SessionCode: any;
    Alert: string;
    location;
    constructor(private loader: MapsAPILoader, private firestore: AngularFirestore, private router: Router, private firebase: FirebaseService, public navCtrl: NavController, private toastController: ToastController) {

    }

    async ngOnInit() {
        this.firestore.collection('/users/userTypes/studentUsers').doc(this.firebase.userDetails().uid).set({
            accountActivity: 'Online',
        }, { merge: true });
        this.firestore.collection('userActivityMonitoring').add({
            loginDateTime: new Date(),
            userId: this.firebase.userDetails().uid,
        })
        this.fetchdata()
    }

    fetchdata() {
        var Batch: string
        var Faculty: string
        var LectureDate: string
        var DegreeCode: string
        var ModuleCode: string
        var LocationCheck: boolean

        // Fetch Date to Query

        var checkdate = function (sp) {
            const today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd < 10) dd = 0 + dd;
            if (mm < 10) mm = 0 + mm;
            return (yyyy + sp + mm + sp + dd);
        };
        // Fetch User Details For Query

        // Load Module Data from Database  
        LectureDate = checkdate('-');
        // LectureDate = '2020-3-21';
        // console.log(LectureDate)
        this.firestore.collection('/users/userTypes/studentUsers').doc(this.firebase.userDetails().uid).ref.get().then((doc) => {
            if (doc.exists) {
                // console.log(doc.data());
                Batch = doc.data().batch.toString()
                Faculty = doc.data().faculty
                DegreeCode = doc.data().degree + ", " + doc.data().awardingBodyUniversity
                // console.log(DegreeCode + Faculty + Batch)
                this.firebase.fetchSession(Batch, Faculty, LectureDate, DegreeCode).subscribe(data => {
                    // console.log(doc.data())
                    if (!doc.exists) {
                        // console.log('NO SESSION FOR TODAY ')
                        this.nosession = true;
                    }
                    else {
                        this.nosession = false;
                        this.check = data.map(e => {
                            ModuleCode = e.payload.doc.data()['moduleCode'] + "-" + e.payload.doc.data()['moduleTitle']
                            // console.log(ModuleCode)
                            this.firestore.collection('Attendance/History/' + ModuleCode).doc(this.firebase.userDetails().email).ref.get().then((doc) => {
                                if (doc.exists) {
                                    // console.log(doc.data())
                                    // console.log('ALREADY SIGNED')
                                    this.signed = true;
                                }
                                else {
                                    this.signed = false;
                                    this.firebase.fetchSession(Batch, Faculty, LectureDate, DegreeCode).subscribe(data => {
                                        // console.log(Batch + '' + Faculty + '' + LectureDate)
                                        this.session = data.map(e => {
                                            ModuleCode = e.payload.doc.data()['moduleCode'] + "-" + e.payload.doc.data()['moduleTitle']
                                            LocationCheck = e.payload.doc.data()['LocationCheck']
                                            return {

                                                id: e.payload.doc.id,
                                                SessionCode: e.payload.doc.data()['SessionCode'],
                                                Module: e.payload.doc.data()['moduleCode'] + " " + e.payload.doc.data()['moduleTitle'],
                                                Session: e.payload.doc.data()['Session'],
                                                Date: e.payload.doc.data()['startDateTime'].toDate(),
                                                Hall: e.payload.doc.data()['lectureHall'],
                                                Lecturer: e.payload.doc.data()['lecturer'],
                                            };
                                        })
                                        // console.log(this.session);

                                        // console.log(ModuleCode)
                                        this.firestore.collection('/faculties/' + Faculty + '/lectureSessions/undergraduate/' + Batch + '/' + DegreeCode + '/' + LectureDate).doc(ModuleCode).ref.get().then((doc) => {
                                            if (doc.exists) {
                                                // console.log(doc.data());
                                                this.CloudCode = doc.data().SessionCode
                                                // console.log(this.CloudCode)
                                            } else {
                                                // console.log("There is no document!");

                                            }
                                        }).catch(function (error) {
                                            // console.log("There was an error getting your document:", error);
                                        });

                                    })
                                }
                            })

                        });
                        navigator.geolocation.getCurrentPosition(function (position) {
                            var pos = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            }
                            var NSBMPOS = 'lat: 6.8211, lng: 80.0409'
                            if (LocationCheck = true) {
                                if (pos.toString() == NSBMPOS) {
                                    this.location = true;
                                }
                                else {
                                    // this.location = false;
                                }
                            }
                            if (LocationCheck = false) {
                                this.location = true;
                            }
                        });

                    }
                })
            } else {
                // console.log("There is no document!");

            }
        }).catch(function (error) {
            // console.log("There was an error getting your document:", error);
        });
    }

    async addAttendaceToFirebase() {
        var Batch: string
        var Faculty: string
        var LectureDate: string
        var DegreeCode: string
        var ModuleCode: string
        if (this.CloudCode == this.SessionCode) {
            // Fetch Date to Query
            var checkdate = function (sp) {
                const today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1;
                var yyyy = today.getFullYear();

                if (dd < 10) dd = 0 + dd;
                if (mm < 10) mm = 0 + mm;
                return (dd + sp + mm + sp + yyyy);
            };
            // Fetch User Details For Query

            // Load Module Data from Database  
            LectureDate = checkdate('-');
            LectureDate = '2020-4-21';
            this.firestore.collection('/users/userTypes/studentUsers').doc(this.firebase.userDetails().uid).ref.get().then((doc) => {
                if (doc.exists) {
                    // console.log(doc.data());
                    Batch = doc.data().batch.toString()
                    Faculty = doc.data().faculty
                    DegreeCode = doc.data().degree + ", " + doc.data().awardingBodyUniversity
                    this.firebase.fetchSession(Batch, Faculty, LectureDate, DegreeCode).subscribe(data => {
                        // console.log(Batch + '' + Faculty + '' + LectureDate)
                        this.session = data.map(e => {
                            ModuleCode = e.payload.doc.data()['moduleCode'] + "-" + e.payload.doc.data()['moduleTitle']
                            return {

                                id: e.payload.doc.id,
                                SessionCode: e.payload.doc.data()['SessionCode'],
                                Module: e.payload.doc.data()['moduleCode'] + " " + e.payload.doc.data()['moduleTitle'],
                                Session: e.payload.doc.data()['Session'],
                                Date: e.payload.doc.data()['startDateTime'].toDate(),
                                Hall: e.payload.doc.data()['lectureHall'],
                                Lecturer: e.payload.doc.data()['lecturer'],
                            };
                        })
                        // SENDING to FIRESTORE
                        console.log(ModuleCode)
                        this.firebase.sendAttendance(ModuleCode, this.firebase.userDetails().email).then(async resp => {
                            const toast = await this.toastController.create({
                                message: 'Your Attendance has been accepted',
                                duration: 2000
                            });
                            toast.present();
                            this.fetchdata();
                        })
                            .catch(async error => {
                                // console.log(error);
                                const toast = await this.toastController.create({
                                    message: 'Error in Network, check back later.',
                                    duration: 2000
                                });
                                toast.present();
                            });
                    })
                }
            })
        }

        else {
            const toast = await this.toastController.create({
                message: 'Session Code is Wrong ! | TRY AGAIN',
                duration: 2000
            });
            toast.present();
            this.Alert = "Session Code is Wrong ! | TRY AGAIN";
        }

    }


    goSettings() {
        this.router.navigate(['Student/Settings']);
        // console.log('settings');
    }
    goeSign() {
        this.router.navigate(['Student/eSign']);
        // console.log('Home');
    }
    goECForm() {
        this.router.navigate(['Student/EC-Form']);
        // console.log('EC-Form');
    }
    goAttendence() {
        this.router.navigate(['Student/Attendence']);
        // console.log('Attendence');
    }
    goNotices() {
        this.router.navigate(['Student/Notices']);
        // console.log('settings');
    }
}