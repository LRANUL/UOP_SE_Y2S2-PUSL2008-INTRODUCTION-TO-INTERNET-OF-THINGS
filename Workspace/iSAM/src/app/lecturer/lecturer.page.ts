import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/';
import { FirebaseService } from '../services/firebase.service';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.page.html',
  styleUrls: ['./lecturer.page.scss'],
})
export class LecturerPage implements OnInit {
  Faculty: any;
  Name: any;
  title;
  Key: any;
  notices: any;
  eventSource = [];
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  selectedDate = new Date();
  Module: string;
  check: boolean;
  value: any;
  constructor(private toastController: ToastController, private firestore: AngularFirestore, private firebase: FirebaseService, public loadingController: LoadingController, public navCtrl: NavController) { }
  ngOnInit() {
    this.firestore.collection('/users/userTypes/lecturerUsers').doc(this.firebase.userDetails().uid).set({
      accountActivity: 'Online',
    }, { merge: true });
    this.firestore.collection('userActivityMonitoring').add({
      loginDateTime: new Date(),
      userId: this.firebase.userDetails().uid,
    })
    var name;
    var faculty;

    this.firestore.collection('/users/userTypes/lecturerUsers').doc(this.firebase.userDetails().uid).ref.get().then((doc) => {
      if (doc.exists) {
        // console.log(doc.data());
        this.Name = doc.data().name.prefix + " " + doc.data().name.firstName + " " + doc.data().name.lastName;
        faculty = doc.data().createdDetails.createdFaculty;
        // console.log(faculty)
        this.firestore.collection('faculties').doc(faculty).collection('allLectureSessions').snapshotChanges().subscribe(keys => {
          this.eventSource = [];
          keys.forEach(key => {
            let event: any = key.payload.doc.data();
            event.id = key.payload.doc.id;
            event.title = event.moduleTitle + " | At Hall: " + event.lectureHall;
            event.startTime = event.startDateTime.toDate();
            event.endTime = event.endDateTime.toDate();
            this.Module = event.moduleTitle
            this.eventSource.push(event);
          });
        });
      }
    })
  }
  checkevt($event) {
    this.check = !this.value;
  }
  generateKey() {
    if(this.check=true){
      var LocationCheck = true;
    }
    else{
      var LocationCheck = false;
    }
    var seconds = new Date().getTime();
    var uniquekey = 'xyxyxy'.replace(/[xy]/g, function (c) {
      var randomkey = (seconds + Math.random() * 25) % 25 | 0;
      seconds = Math.floor(seconds / 25);
      return (c == 'x' ? randomkey : (randomkey & 0x3 | 0x8)).toString(25);
    });
    this.Key = uniquekey.toUpperCase()
    var name;
    var faculty;
    var PrepKey = this.Key = uniquekey.toUpperCase()
    this.firestore.collection('/users/userTypes/lecturerUsers').doc(this.firebase.userDetails().uid).ref.get().then((doc) => {
      if (doc.exists) {
        // console.log(doc.data());
        this.Name = doc.data().name.prefix + " " + doc.data().name.firstName + " " + doc.data().name.lastName;
        faculty = doc.data().createdDetails.createdFaculty;
        // console.log(faculty)
        this.firestore.collection('faculties').doc(faculty).collection('allLectureSessions').snapshotChanges().subscribe(keys => {
          this.eventSource = [];
          keys.forEach(key => {
            let event: any = key.payload.doc.data();
            event.id = key.payload.doc.id;
            event.title = event.moduleTitle + " | At Hall: " + event.lectureHall;
            event.startTime = event.startDateTime.toDate();
            event.endTime = event.endDateTime.toDate();
            this.Module = event.moduleTitle
            if (name = event.lecturer) {
              var selectedDoc = key.payload.doc.id
              // console.log(PrepKey + " " + selectedDoc)
              this.firebase.sendKey(faculty, PrepKey, selectedDoc, LocationCheck).then(async resp => {
                const toast = await this.toastController.create({
                  message: 'Code Added to Module',
                  duration: 2000
                });
                toast.present();
              })
                .catch(async error => {
                  // console.log(error);
                  const toast = await this.toastController.create({
                    message: 'Error in Network, check back later. Or contact Programs Office',
                    duration: 2000
                  });
                  toast.present();
                });
            }
          });
        });

      }
    })
  }

  async logout() {
    this.firestore.collection('/users/userTypes/lecturerUsers').doc(this.firebase.userDetails().uid).set({
      accountActivity: 'Offline',
    }, { merge: true });
    this.firebase
      .logoutUser()
      .then(async res => {
        // console.log(res);
        const loading = await this.loadingController.create({
          message: 'Logging out...',
          duration: 2000
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
        // console.log('Loading dismissed!');

        this.navCtrl.navigateBack("");
      })
      .catch(error => {
        // console.log(error);
      });
  }

}
