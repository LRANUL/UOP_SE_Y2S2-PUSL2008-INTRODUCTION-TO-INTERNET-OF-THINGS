import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SideMenuPage } from '../side-menu/side-menu.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private sideMenuPageUserFaculty: SideMenuPage,
    private settingsService: FirebaseService
  ) { }

  ngOnInit() {

    this.retrievePublishedBatch();

    this.retrievePublishedDegreeProgram();

    this.retrievePublishedModuleCreditsWeighting();

    this.retrievePublishedLectureSessionStatuses();

    this.retrievePublishedUserStatuses();

  }

  // Retrieving published batches and their details from the firestore database
  publishedBatches;
  retrievePublishedBatch = () => 
    this.settingsService.retrievePublishedBatch(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedBatches = response));

  // Retrieving published degree programs and their details from the firestore database
  publishedDegreePrograms;
  retrievePublishedDegreeProgram = () => 
    this.settingsService.retrievePublishedDegreeProgram(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedDegreePrograms = response));

  // Retrieving published no of credit weightings and their detailk from the firestore database
  publishedNoOfCreditWeightings;
  retrievePublishedModuleCreditsWeighting = () => 
    this.settingsService.retrievePublishedModuleCreditsWeighting().subscribe(response => (this.publishedNoOfCreditWeightings = response));

  // Retrieving published lecture session statuses and their details from the firestore database
  publishedLectureSessionStatuses;
  retrievePublishedLectureSessionStatuses = () =>
    this.settingsService.retrievePublishedLectureSessionStatuses().subscribe(response => (this.publishedLectureSessionStatuses = response));

  // Retrieving published user statuses and their detailk from the firestore database
  publishedUserStatuses;
  retrievePublishedUserStatuses = () =>
    this.settingsService.retrievePublishedUserStatuses().subscribe(response => (this.publishedUserStatuses = response));

}
