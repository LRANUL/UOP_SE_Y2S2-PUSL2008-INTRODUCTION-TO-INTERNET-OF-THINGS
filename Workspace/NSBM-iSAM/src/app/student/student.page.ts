import { FirebaseService } from 'src/app/services/firebase.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Geofence } from '@ionic-native/geofence/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  atNSBM: boolean = false;
  // View: string = "https://ui-avatars.com/api/?name={R}+{L}&background=4287f5&color=fff";
  
  userEmail: string;
  View: string;
  constructor(private loader: MapsAPILoader, private http: HttpClient, private authService: FirebaseService, private menu: MenuController, public navCtrl: NavController, private geofence: Geofence, private firestore: AngularFirestore, ) {
    geofence.initialize().then(
      () => console.log('Location Check Ready'),
      (err) => console.log(err)
    )
    this.NSBMBorder()
  }
  FName: "Ranul";
  LName: "L";
  ngOnInit() {
  
      this.userEmail = this.authService.userDetails().email;
      console.log(this.userEmail)

    var ref = firebase.database().ref(this.userEmail);
    ref.orderByChild("firstName").on("child_added", function (snapshot) {
      console.log(snapshot.key);
    });
    this.View = `https://ui-avatars.com/api/?name=` + this.FName + `+` + this.LName + `&background=4287f5&color=fff`;
  }

  goSettings() {
    this.navCtrl.navigateForward("Student/Settings");
    console.log('settings');
  }
  goHome() {
    this.navCtrl.navigateBack("Student/");
    console.log('Home');
  }
  goECForm() {
    this.navCtrl.navigateForward("Student/EC-Form");
    console.log('EC-Form');
  }
  goAttendence() {
    this.navCtrl.navigateForward("Student/Attendence");
    console.log('Attendence');
  }
  goNotices() {
    this.navCtrl.navigateForward("Student/Notices");
    console.log('settings');
  }


  private NSBMBorder() {
    console.log('Geofence added');
    let fence = {
      id: 'NSBMBorder',
      latitude: 6.820929,
      longitude: 80.039773,
      radius: 55,
      transitionType: 1,
      atNSBM: true,
    }

    this.geofence.addOrUpdate(fence).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    console.log(this.atNSBM);

  }
} 
