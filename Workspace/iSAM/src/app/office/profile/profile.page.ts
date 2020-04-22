import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SideMenuPage } from '../side-menu/side-menu.page';
import { PopoverController } from '@ionic/angular';
import { NotificationsPopoverPage } from '../notifications-popover/notifications-popover.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  

  constructor(
    private profileService: FirebaseService,
    private sideMenuPageUserFaculty: SideMenuPage,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {

    this.retrieveLoggedInUserDetailsFirestore();

  }


  // Opening notifications popover
  async openNotificationPopover(ev: Event){
    const moreDetailsLectureSessionPopover = await this.popoverController.create({
      component: NotificationsPopoverPage,
      componentProps: {
        loggedInUserId: this.sideMenuPageUserFaculty.passLoggedInUserId()
      },
      event: ev
    });
    moreDetailsLectureSessionPopover.present();
  }



  programOfficeUserDetails;
  retrieveLoggedInUserDetailsFirestore = () =>
    this.profileService.retrieveLoggedInUserDetailsProgramOffice(this.sideMenuPageUserFaculty.passLoggedInUserId()).subscribe(response => (this.programOfficeUserDetails = response));
}
