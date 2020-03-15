import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  View: string = "https://ui-avatars.com/api/?name={R}+{L}&background=4287f5&color=fff";
  //get names from DB
  FName: string = null;
  LName: string = null;
  constructor(private menu: MenuController, public navCtrl: NavController) {
  
  }

  ngOnInit() {
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
}
