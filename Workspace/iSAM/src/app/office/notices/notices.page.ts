import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AlertController, PopoverController } from '@ionic/angular';
import { SideMenuPage } from '../side-menu/side-menu.page';
import { NotificationsPopoverPage } from '../notifications-popover/notifications-popover.page';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.page.html',
  styleUrls: ['./notices.page.scss'],
})
export class NoticesPage implements OnInit {


  newStudentNoticeSendForm: FormGroup;

  newLecturerNoticeSendForm: FormGroup;

  showLoadingDot: Boolean = true;

  userFaculty;


  currentDate;

  dateThreeDaysBeforeCurrentDate;


  noNoticePOToLecturersText: Boolean = false;

  noNoticeLecturersToPOText: Boolean = false;

  noNoticePOToStudentsText: Boolean = false;

  

  loadingSpinnerPOToLecturer: Boolean = true;

  loadingSpinnerLecturerToPO: Boolean = true;

  loadingSpinnerPOToStudent: Boolean = true;
  

  constructor(
    private formBuilder: FormBuilder,
    private noticesService: FirebaseService,
    private alertController: AlertController,
    private sideMenuPageUserFaculty: SideMenuPage,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {

    this.userFaculty = this.sideMenuPageUserFaculty.passLoggedInUserFaculty();

    this.currentDate = new Date();

    this.dateThreeDaysBeforeCurrentDate = new Date();

    this.dateThreeDaysBeforeCurrentDate.setDate(this.currentDate.getDate()-3);


    this.retrievePublishedLecturerToPONotice();

    this.retrievePublishedPOToStudentNotice();

    this.retrievePublishedPOToLecturerNotice();


    this.retrieveRegisteredModules();

    this.retrievePublishedBatch();

    this.retrieveRegisteredLecturers();

    this.retrievePublishedNoticeCategories();

    // New Student Notice Form
    this.newStudentNoticeSendForm = this.formBuilder.group({
      noticeTitle: new FormControl('', Validators.compose([
        Validators.required
      ])),
      noticeDescription: new FormControl('', Validators.compose([
        Validators.required
      ])),
      noticeCategory: new FormControl('', Validators.compose([
        Validators.required
      ])),
      noticeRecipientModule: new FormControl(''),
      noticeRecipientBatch: new FormControl('')
    });


    // New Lecturer Notice Form
    this.newLecturerNoticeSendForm = this.formBuilder.group({
      noticeTitle: new FormControl('', Validators.compose([
        Validators.required
      ])),
      noticeDescription: new FormControl('', Validators.compose([
        Validators.required
      ])),
      noticeCategory: new FormControl('', Validators.compose([
        Validators.required
      ])),
      noticeRecipient: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
    
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

  moreDetailsNotice(event, value){
    
  }

  // Retrieving registered modules from the firestore database
  registeredModules;
  retrieveRegisteredModules = () =>
    this.noticesService.retrieveRegisteredModules(this.userFaculty).subscribe(response => (this.registeredModules = response));

  // Retrieving published batches from the firestore database
  publishedBatches;
  retrievePublishedBatch = () => 
    this.noticesService.retrievePublishedBatch(this.userFaculty).subscribe(response => (this.publishedBatches = response));

  // Retrieving registered lecturers from the firestore database
  registeredLecturers;
  retrieveRegisteredLecturers = () =>
    this.noticesService.retrieveRegisteredLecturers().subscribe(response => (this.registeredLecturers = response));

  // Retrieving published notice categories from the firestore database
  publishedNoticeCategories;
  retrievePublishedNoticeCategories = () => 
    this.noticesService.retrievePublishedNoticeCategories().subscribe(response => (this.publishedNoticeCategories = response));



  // Retrieving Lecturer to PO notices from current date to three days ago from the firestore database
  publishedLecturerPONotices;
  retrievePublishedLecturerToPONotice = () =>
    this.noticesService.retrievePublishedLecturerToPONotice(this.currentDate, this.dateThreeDaysBeforeCurrentDate).subscribe(response => {
      if(response.length > 0){
        this.loadingSpinnerLecturerToPO = false;
        this.publishedLecturerPONotices = response;
      }
      else {
        this.loadingSpinnerLecturerToPO = false;
        this.noNoticeLecturersToPOText = true;
      }
    }, error => {
      this.loadingSpinnerLecturerToPO = false;
      console.log("Error: " + error);
      this.alertNotice("Error", "An error has occurred: " + error);
    });

  // Retrieving PO to Student notices from current date to three days ago from the firestore database
  publishedPOStudentNotices;
  retrievePublishedPOToStudentNotice = () =>
    this.noticesService.retrievePublishedPOToStudentNotice(this.currentDate, this.dateThreeDaysBeforeCurrentDate).subscribe(response => {
      if(response.length > 0){
        this.loadingSpinnerPOToStudent = false;
        this.publishedPOStudentNotices = response;
      }
      else {
        this.loadingSpinnerPOToStudent = false;
        this.noNoticePOToStudentsText = true;
      }
    }, error => {
      this.loadingSpinnerPOToStudent = false;
      console.log("Error: " + error);
      this.alertNotice("Error", "An error has occurred: " + error);
    });

  // Retrieving PO to Lecturer notices from current date to three days ago from the firestore database
  publishedPOLecturerNotices;
  retrievePublishedPOToLecturerNotice = () =>
    this.noticesService.retrievePublishedPOToLecturerNotice(this.currentDate, this.dateThreeDaysBeforeCurrentDate).subscribe(response => {
      if(response.length > 0){
        this.loadingSpinnerPOToLecturer = false;
        this.publishedPOLecturerNotices = response;
      }
      else {
        this.loadingSpinnerPOToLecturer = false;
        this.noNoticePOToLecturersText = true;
      }
    }, error => {
      this.loadingSpinnerPOToLecturer = false;
      console.log("Error: " + error);
      this.alertNotice("Error", "An error has occurred: " + error);
    });




  /* Javascript Functions */
  showLecturerNoticeForm(){
    var userClickOnLecturer = document.getElementById("newLecturerNoticeSubmit");
    var userClickOnStudent = document.getElementById("newStudentNoticeSubmit");
    var newNoticeSectionCard = document.getElementById("newNoticeFormSection");
    if(userClickOnStudent.style.display === "inline"){
      userClickOnStudent.style.display = "none";
      userClickOnLecturer.style.display = "inline";
      newNoticeSectionCard.style.background = "#CDE7F9";
    }
  }
  showStudentNoticeForm(){
    var userClickOnLecturer = document.getElementById("newLecturerNoticeSubmit");
    var userClickOnStudent = document.getElementById("newStudentNoticeSubmit");
    var newNoticeSectionCard = document.getElementById("newNoticeFormSection");
    if(userClickOnLecturer.style.display === "inline"){
      userClickOnLecturer.style.display = "none";
      userClickOnStudent.style.display = "inline";
      newNoticeSectionCard.style.background = "#F3FAFC";
    }
  }




  // Alert Box Implementation
  async alertNotice ( title: string, content: string ) {

    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });

    await alert.present();

  }



  // Creating new student notice
  doNewStudentNoticeSend(value){

    // Displaying confirm box requesting to continue to firestore data submission
    this.confirmNewStudentNotice('Send Student Notice', 'Click on continue to create new student notice', value);    
    
  }

  // Confirm Box Implementation (Create New Student Notice)
  async confirmNewStudentNotice ( title: string, content: string, value) {

    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: [

        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Alert Box: Create New Student Notice Request Denied");
          }
        },
        {
          text: 'Continue',
          handler: () => {
            console.log("Alert Box: Create New Student Notice Request Accepted");

            // Adding new student notice details into firestore if the user agrees
            this.noticesService.newStudentNoticeDetailsSubmission(value, this.sideMenuPageUserFaculty.passLoggedInUserId(), this.sideMenuPageUserFaculty.passLoggedInUserFaculty());

            // Displaying new student notice created confirmation in alert message 
            this.alertNotice('New Student Notice Created Successfully', 'Student notice has been created successfully. Please refer the "Notices Sent to Students" section to view notice.');

            // Resetting the new student notice form to initial state
            this.newStudentNoticeSendForm.reset();

          }
        }

      ]
    });
    await alert.present();
  }

  // Creating new student notice
  doNewLecturerNoticeSendForm(value){

      // Displaying confirm box requesting to continue to add the detail to firestore
      this.confirmNewLecturerNotice('Send Lecturer Notice', 'Click on continue to create new lecturer notice', value);    

  }

  // Confirm Box Implementation (Create New Student Notice)
  async confirmNewLecturerNotice ( title: string, content: string, value) {

    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: [

        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Alert Box: Create New Lecturer Notice Request Denied");
          }
        },
        {
          text: 'Continue',
          handler: () => {
            console.log("Alert Box: Create New Lecturer Notice Request Accepted");

            // Adding new lecturer notice details into firestore if the user agrees
            this.noticesService.newLecturerNoticeDetailsSubmission(value, this.sideMenuPageUserFaculty.passLoggedInUserId(), this.sideMenuPageUserFaculty.passLoggedInUserFaculty());

            // Displaying new lecturer notice created confirmation in alert message 
            this.alertNotice('New Lecturer Notice Created Successfully', 'Lecturer notice has been created successfully. Please refer the "Notices Sent to Students" section to view notice.');

            // Resetting the new lecturer notice form to initial state
            this.newLecturerNoticeSendForm.reset();

          }
        }

      ]
    });
    await alert.present();
  }


  // Process of retrieving notices sent to lecturers for the selected date from the firestore database
  retrieveNoticePOToLecturersSelectedDate(event){

    this.noNoticePOToLecturersText = false;

    // Assigning existing notices on frontend to null
    this.publishedPOLecturerNotices = null;

    this.loadingSpinnerPOToLecturer = true;

    let selectedDate = new Date(event.detail.value);

    selectedDate.setHours(0,0,0,0);

    let nextDate = new Date();

    nextDate.setHours(0,0,0,0);

    nextDate.setDate(selectedDate.getDate()+1);

    console.log(selectedDate);
    console.log(nextDate);

    this.noticesService.retrievePublishedPOToLecturerSelectedDate(selectedDate, nextDate).subscribe(response => {
      if(response.length > 0){
        this.loadingSpinnerPOToLecturer = false;

        // Setting no notices text to hide
        this.noNoticePOToLecturersText = false;

        // Assigning retrieved document details
        this.publishedPOLecturerNotices = response;
      }
      else {
        this.loadingSpinnerPOToLecturer = false;

        // Setting no notices text to show
        this.noNoticePOToLecturersText = true;
      }
    }, error => {
      this.loadingSpinnerPOToLecturer = false;
      console.log("Error: " + error);
      this.alertNotice("Error", "An error has occurred: " + error);
    });
  }



  // Process of retrieving notices sent from lectures for the selected date from the firestore database
  retrieveNoticeLecturersToPOSelectedDate(event){

    this.noNoticeLecturersToPOText = false;
  
    // Assigning existing notices on frontend to null
    this.publishedLecturerPONotices = null;

    this.loadingSpinnerLecturerToPO = true;

    let selectedDate = new Date(event.detail.value);

    selectedDate.setHours(0,0,0,0);

    let nextDate = new Date();

    nextDate.setHours(0,0,0,0);

    nextDate.setDate(selectedDate.getDate()+1);

    console.log(selectedDate);
    console.log(nextDate);

    this.noticesService.retrievePublishedLecturerToPONoticeSelectedDate(selectedDate, nextDate).subscribe(response => {
      if(response.length > 0){
        this.loadingSpinnerLecturerToPO = false;

        // Setting no notices text to hide
        this.noNoticeLecturersToPOText = false;

        // Assigning retrieved document details
        this.publishedLecturerPONotices = response;
      }
      else {
        this.loadingSpinnerLecturerToPO = false;

        // Setting no notices text to show
        this.noNoticeLecturersToPOText = true;
      }
    }, error => {
      this.loadingSpinnerLecturerToPO = false;
      console.log("Error: " + error);
      this.alertNotice("Error", "An error has occurred: " + error);
    });
  }


  
  // Process of retrieving notices sent to students for the selected date from the firestore database
  retrieveNoticePOToStudentsSelectedDate(event){

    this.noNoticePOToStudentsText = false;

    // Assigning existing notices on frontend to null
    this.publishedPOStudentNotices = null;

    this.loadingSpinnerPOToStudent = true;

    let selectedDate = new Date(event.detail.value);

    selectedDate.setHours(0,0,0,0);

    let nextDate = new Date();

    nextDate.setHours(0,0,0,0);

    nextDate.setDate(selectedDate.getDate()+1);

    console.log(selectedDate);
    console.log(nextDate);

    this.noticesService.retrievePublishedPOToStudentNoticeSelectedDate(selectedDate, nextDate).subscribe(response => {
      if(response.length > 0){
        this.loadingSpinnerPOToStudent = false;

        // Setting no notices text to hide
        this.noNoticePOToStudentsText = false;

        // Assigning retrieved document details
        this.publishedPOStudentNotices = response;
      }
      else {
        this.loadingSpinnerPOToStudent = false;

        // Setting no notices text to show
        this.noNoticePOToStudentsText = true;
      }
    }, error => {
      this.loadingSpinnerPOToStudent = false;
      console.log("Error: " + error);
      this.alertNotice("Error", "An error has occurred: " + error);
    });
  }


 



}
