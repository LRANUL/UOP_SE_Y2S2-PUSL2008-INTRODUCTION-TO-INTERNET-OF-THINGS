import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SideMenuPage } from '../side-menu/side-menu.page';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  addDegreeProgramFormSection: Boolean = false;

  addDegreeProgramButton: Boolean = true;

  closeDegreeProgramFormButton: Boolean = false;


  addDegreeProgramForm: FormGroup;



  constructor(
    private sideMenuPageUserFaculty: SideMenuPage,
    private settingsService: FirebaseService,
    private alertController: AlertController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.retrievePublishedBatch();

    this.retrievePublishedDegreeProgram();

    this.retrievePublishedModuleCreditsWeighting();

    this.retrievePublishedLectureHalls();

    this.retrievePublishedLectureSessionStatuses();

    this.retrievePublishedUserStatuses();

    this.retrievePublishedNoticeCategories();


    this.retrieveRegisteredLecturers();


    this.addDegreeProgramForm = this.formBuilder.group({
      degree: new FormControl('', Validators.required),
      awardingBodyUniversity: new FormControl('', Validators.required),
      academicPeriodYear: new FormControl('', Validators.required),
      academicPeriodSemester: new FormControl('', Validators.required),
      programDelivery: new FormControl('', Validators.required),
      programCoordinator: new FormControl('', Validators.required)
    });

  }

  // Retrieving published batches and their details from the firestore database
  publishedBatches;
  retrievePublishedBatch = () => 
    this.settingsService.retrievePublishedBatch(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedBatches = response));

  // Retrieving published degree programs and their details from the firestore database
  publishedDegreePrograms;
  retrievePublishedDegreeProgram = () => 
    this.settingsService.retrievePublishedDegreeProgram(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedDegreePrograms = response));

  // Retrieving published no of credit weightings and their details from the firestore database
  publishedNoOfCreditWeightings;
  retrievePublishedModuleCreditsWeighting = () => 
    this.settingsService.retrievePublishedModuleCreditsWeighting().subscribe(response => (this.publishedNoOfCreditWeightings = response));

  // Retrieving published lecture halls and their details from the firestore database
  publishedLectureHalls;
  retrievePublishedLectureHalls = () => 
    this.settingsService.retrievePublishedLectureHalls(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedLectureHalls = response));

  // Retrieving published lecture session statuses and their details from the firestore database
  publishedLectureSessionStatuses;
  retrievePublishedLectureSessionStatuses = () =>
    this.settingsService.retrievePublishedLectureSessionStatuses().subscribe(response => (this.publishedLectureSessionStatuses = response));

  // Retrieving published user statuses and their details from the firestore database
  publishedUserStatuses;
  retrievePublishedUserStatuses = () =>
    this.settingsService.retrievePublishedUserStatuses().subscribe(response => (this.publishedUserStatuses = response));

  // Retrieving published notice categories and their details from the firestore database
  publishedNoticeCategory;
  retrievePublishedNoticeCategories = () =>
    this.settingsService.retrievePublishedNoticeCategories().subscribe(response => (this.publishedNoticeCategory = response));


  // Retrieving registered lecturers from the firestore database
  registeredLecturers;
  retrieveRegisteredLecturers = () =>
    this.settingsService.retrieveRegisteredLecturers().subscribe(response => (this.registeredLecturers = response));

  // Alert Box Implementation
  async alertNotice ( title: string, content: string ) {

    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });

    await alert.present();

  }



  openAddDegreeProgramForm(){

    if(this.addDegreeProgramButton == true){
      this.addDegreeProgramButton = false;
      this.closeDegreeProgramFormButton = true;
      this.addDegreeProgramFormSection = true;
    }
    else if(this.addDegreeProgramButton == false){
      this.addDegreeProgramButton = true;
      this.closeDegreeProgramFormButton = false;
      this.addDegreeProgramFormSection = false;
    }

  }

  // Process of adding a new degree program
  doAddDegreeProgram(value){

    // Adding values to the firestore database
    this.settingsService.addNewDegreeProgram(value, this.sideMenuPageUserFaculty.passLoggedInUserFaculty());

    this.alertNotice("Degree Program Added", "New degree program has been added.");

    this.addDegreeProgramForm.reset();

  }

  // Confirm Box Implementation (Process of removing a degree program)
  async removeDegreeProgram ( title: string, content: string, value) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: [

        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Alert Box: Remove Degree Program Request Denied");
          }
        },
        {
          text: 'Continue',
          handler: () => {
            console.log("Alert Box: Remove Degree Program Request Accepted");

            let docId = value.payload.doc.id

            // Calling function to remove lecture session
            this.settingsService.removeDegreeProgram(docId, this.sideMenuPageUserFaculty.passLoggedInUserFaculty());

            this.alertNotice("Removed", "Degree Program has been removed");
          }
        }
      ]
    });
    await alert.present();
  }

  



}
