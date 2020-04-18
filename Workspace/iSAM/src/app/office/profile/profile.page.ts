import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SideMenuPage } from '../side-menu/side-menu.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  

  constructor(
    private profileService: FirebaseService,
    private sideMenuPageUserFaculty: SideMenuPage
  ) { }

  ngOnInit() {

    this.retrieveLoggedInUserDetailsFirestore();

  }

  programOfficeUserDetails;
  retrieveLoggedInUserDetailsFirestore = () =>
    this.profileService.retrieveLoggedInUserDetailsLecturer(this.sideMenuPageUserFaculty.passLoggedInUserId()).subscribe(response => (this.programOfficeUserDetails = response));
}
