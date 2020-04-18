import { Component, OnInit } from '@angular/core';
import { SideMenuPage } from '../side-menu/side-menu.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private sideMenuPageUserFaculty: SideMenuPage
  ) { }

  ngOnInit() {

    console.log(this.sideMenuPageUserFaculty.passLoggedInUserId());
    console.log(this.sideMenuPageUserFaculty.passLoggedInUserFaculty());
    

  }

}
