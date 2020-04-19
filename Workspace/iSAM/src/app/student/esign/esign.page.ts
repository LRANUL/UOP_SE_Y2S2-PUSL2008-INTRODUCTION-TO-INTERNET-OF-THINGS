import { FirebaseService } from 'src/app/services/firebase.service';
import { NavController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Geofence } from '@ionic-native/geofence/ngx';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore/';
@Component({ selector: 'app-esign', templateUrl: './esign.page.html', styleUrls: ['./esign.page.scss'] })

export class EsignPage implements OnInit {
    session: { SessionCode: any; Module: any; Session: any; Date: any; Time: any; Hall: any; }[];
    location: boolean;
    SessionCode: { SessionCode: any; Module: any; Session: any; Date: any; Time: any; Hall: any; }[];
    Module: any;
    Session: any;
    Date: any;
    Time: any;
    Hall: any;
    Alert: string;
    CloudCode: any;
    Batch: any;
    Faculty: any;
    Today: any;
    check: void[];

    constructor(private firestore: AngularFirestore, private router: Router, private firebase: FirebaseService, public navCtrl: NavController, private geofence: Geofence, private toastController: ToastController) {

    }

    async ngOnInit() {
        var Batch: string
        var Faculty: string
        var LectureDate: string
        var DegreeCode: string
        var ModuleCode: string
        var Module: string

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
        this.firestore.collection('/users/userTypes/studentUsers').doc(this.firebase.userDetails().uid).ref.get().then((doc) => {
            if (doc.exists) {
                console.log(doc.data());
                Batch = doc.data().batch.toString()
                Faculty = doc.data().faculty
                DegreeCode = doc.data().DegreeCode

                this.firebase.fetchSession(Batch, Faculty, LectureDate, DegreeCode).subscribe(data => {
                    this.check = data.map(e => {
                        Module = e.payload.doc.data()['Module']
                        this.firestore.collection('Attendance/History/' + Module).doc(this.firebase.userDetails().email).ref.get().then((doc) => {
                            if (doc.exists) {
                                console.log(doc.data())
                                console.log('ALREADY SIGNED')
                            }
                            else {
                                this.firebase.fetchSession(Batch, Faculty, LectureDate, DegreeCode).subscribe(data => {
                                    console.log(Batch + '' + Faculty + '' + LectureDate)
                                    this.session = data.map(e => {
                                        ModuleCode = e.payload.doc.data()['ModuleCode']
                                        return {

                                            id: e.payload.doc.id,
                                            SessionCode: e.payload.doc.data()['SessionCode'],
                                            Module: e.payload.doc.data()['Module'],
                                            Session: e.payload.doc.data()['Session'],
                                            Date: e.payload.doc.data()['Date'],
                                            Time: e.payload.doc.data()['Time'],
                                            Hall: e.payload.doc.data()['Hall'],
                                        };
                                    })
                                    console.log(this.session);

                                    console.log(ModuleCode)
                                    this.firestore.collection('/faculties/' + Faculty + '/' + Batch + '/' + DegreeCode + '/' + LectureDate).doc(ModuleCode).ref.get().then((doc) => {
                                        if (doc.exists) {
                                            console.log(doc.data());
                                            this.CloudCode = doc.data().SessionCode
                                            console.log(this.CloudCode)
                                        } else {
                                            console.log("There is no document!");

                                        }
                                    }).catch(function (error) {
                                        console.log("There was an error getting your document:", error);
                                    });

                                }
                                )
                            }
                        })
                    });
                    this.location = true;
                })
            } else {
                console.log("There is no document!");

            }
        }).catch(function (error) {
            console.log("There was an error getting your document:", error);
        });
        //return this.firestore.collection('/faculties/School of Business/Batch/11.1/19-4-2020'
        // firestore.collection('faculties').doc(Faculty).collection(Batch).doc(DegreeCode).collection(LectureDate)
    }

    async addAttendaceToFirebase() {
        var Batch: string
        var Faculty: string
        var LectureDate: string
        var DegreeCode: string
        var Module: string
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
            this.firestore.collection('/users/userTypes/studentUsers').doc(this.firebase.userDetails().uid).ref.get().then((doc) => {
                if (doc.exists) {
                    console.log(doc.data());
                    Batch = doc.data().batch.toString()
                    Faculty = doc.data().faculty
                    DegreeCode = doc.data().DegreeCode
                    this.firebase.fetchSession(Batch, Faculty, LectureDate, DegreeCode).subscribe(data => {
                        console.log(Batch + '' + Faculty + '' + LectureDate)
                        this.session = data.map(e => {
                            Module = e.payload.doc.data()['Module']
                            return {
                                id: e.payload.doc.id,
                                SessionCode: e.payload.doc.data()['SessionCode'],
                                Module: e.payload.doc.data()['Module'],
                                Session: e.payload.doc.data()['Session'],
                                Date: e.payload.doc.data()['Date'],
                                Time: e.payload.doc.data()['Time'],
                                Hall: e.payload.doc.data()['Hall'],
                            };
                        })
                        // SENDING to FIRESTORE
                        this.firebase.userDetails().uid
                        let record = {};
                        record['Date'] = Date();
                        record['' + Module + ''] = firebase.firestore.FieldValue.increment(+1);
                        record['Email'] = this.firebase.userDetails().email;
                        this.firebase.sendAttendance(record, this.firebase.userDetails().uid, Module, this.firebase.userDetails().email).then(async resp => {
                            const toast = await this.toastController.create({
                                message: 'Your Attendance has been accepted',
                                duration: 2000
                            });
                            toast.present();
                        })
                            .catch(async error => {
                                console.log(error);
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
        console.log('settings');
    }
    goeSign() {
        this.router.navigate(['Student/eSign']);
        console.log('Home');
    }
    goECForm() {
        this.router.navigate(['Student/EC-Form']);
        console.log('EC-Form');
    }
    goAttendence() {
        this.router.navigate(['Student/Attendence']);
        console.log('Attendence');
    }
    goNotices() {
        this.router.navigate(['Student/Notices']);
        console.log('settings');
    }
}