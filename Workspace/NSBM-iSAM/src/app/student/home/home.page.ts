import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  View: string = "https://ui-avatars.com/api/?name={R}+{L}&background=4287f5&color=fff";
  //get names from DB
  FName: string = "Kelly";
  LName: string = "Ovlie";
  constructor(private menu: MenuController, public navCtrl: NavController) {
  }

  ngOnInit() {
    this.View = `https://ui-avatars.com/api/?name=` + this.FName + `+` + this.LName + `&background=4287f5&color=fff`;
  }

  goSettings() {
      this.navCtrl.navigateForward("/studentHome/settings");
  }
}