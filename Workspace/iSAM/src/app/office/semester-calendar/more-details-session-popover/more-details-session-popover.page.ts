import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-more-details-session-popover',
  templateUrl: './more-details-session-popover.page.html',
  styleUrls: ['./more-details-session-popover.page.scss'],
})
export class MoreDetailsSessionPopoverPage implements OnInit {

  passedLectureSessionId = null;
  passedBatch = null;
  passedLecturer = null;
  passedLectureHall = null;
  passedDegreeCode = null;
  passedDegree = null;
  passedAwardingBodyUniversity = null;
  passedAcademicPeriodYear = null;
  passedAcademicPeriodSemester = null;

  constructor(
    private navParams: NavParams,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {

    // Retrieving the passed value from the parent page (semester calendar page) and assigning to these variables
    this.passedLectureSessionId = this.navParams.get('lectureSessionId');

    this.passedBatch = this.navParams.get('batch');
    this.passedLecturer = this.navParams.get('lecturer');
    this.passedLectureHall = this.navParams.get('lectureHall');
    this.passedDegreeCode = this.navParams.get('degreeCode');
    this.passedDegree = this.navParams.get('degree');
    this.passedAwardingBodyUniversity = this.navParams.get('awardingBodyUniversity');
    this.passedAcademicPeriodYear = this.navParams.get('academicPeriodYear');
    this.passedAcademicPeriodSemester = this.navParams.get('academicPeriodSemester');
  }

  // Closing the popover
  closeMoreDetailsSessionPopover() {
    this.popoverController.dismiss();
  }

}
