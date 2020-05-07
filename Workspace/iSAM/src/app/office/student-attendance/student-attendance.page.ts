import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { NotificationsPopoverPage } from '../notifications-popover/notifications-popover.page';
import { SideMenuPage } from '../side-menu/side-menu.page';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.page.html',
  styleUrls: ['./student-attendance.page.scss'],
})
export class StudentAttendancePage implements OnInit {

  constructor(
    private popoverController: PopoverController,
    private sideMenuPageUserFaculty: SideMenuPage,
    private alertController: AlertController
  ) { }

  ngOnInit() {

    this.alertNotice('Area In Development - Will be Available Soon');

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


  // Alert Box Implementation
  async alertNotice ( title: string ) {
    const alert = await this.alertController.create({
      header: title,
      buttons: ['OK']
    });
    await alert.present();
  }



}
