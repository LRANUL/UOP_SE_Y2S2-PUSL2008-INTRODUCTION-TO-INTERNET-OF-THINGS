import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SideMenuPage } from '../side-menu/side-menu.page';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, PopoverController, ModalController } from '@ionic/angular';
import { NotificationsPopoverPage } from '../notifications-popover/notifications-popover.page';
import { UpdateAccountDetailsModalPage } from './update-account-details-modal/update-account-details-modal.page';
import { UpdateAccountPasswordModalPage } from './update-account-password-modal/update-account-password-modal.page';
import { EditLectureSessionModalPage } from '../semester-calendar/edit-lecture-session-modal/edit-lecture-session-modal.page';
import { EditDegreeProgramModalPage } from './editModals/edit-degree-program-modal/edit-degree-program-modal.page';
import { EditBatchModalPage } from './editModals/edit-batch-modal/edit-batch-modal.page';
import { EditCreditWeightingModalPage } from './editModals/edit-credit-weighting-modal/edit-credit-weighting-modal.page';
import { EditLectureHallModalPage } from './editModals/edit-lecture-hall-modal/edit-lecture-hall-modal.page';
import { EditLectureSessionStatusModalPage } from './editModals/edit-lecture-session-status-modal/edit-lecture-session-status-modal.page';
import { EditNoticeCategoryModalPage } from './editModals/edit-notice-category-modal/edit-notice-category-modal.page';
import { EditUserAccountStatusModalPage } from './editModals/edit-user-account-status-modal/edit-user-account-status-modal.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  /* Add Form Sections */
  addDegreeProgramFormSection: Boolean = false;
  addBatchFormSection: Boolean = false;
  addCreditWeightingFormSection: Boolean = false;
  addLectureHallFormSection: Boolean = false;
  addLectureSessionStatusFormSection: Boolean = false;
  addUserAccountStatusFormSection: Boolean = false;
  addNoticeCategoryFormSection: Boolean = false;
  updateDetailsLoginFormSection: Boolean = false;
  updatePasswordLoginFormSection: Boolean = false;

  /* Add Buttons */
  addDegreeProgramButton: Boolean = true;
  addBatchButton: Boolean = true;
  addCreditWeightingButton: Boolean = true;
  addLectureHallButton: Boolean = true;
  addLectureSessionStatusButton: Boolean = true;
  addUserAccountStatusButton: Boolean = true;
  addNoticeCategoryButton: Boolean = true;

  /* Close Form Buttons */
  closeDegreeProgramFormButton: Boolean = false;
  closeBatchFormButton: Boolean = false;
  closeCreditWeightingFormButton: Boolean = false;
  closeLectureHallFormButton: Boolean = false;
  closeLectureSessionStatusFormButton: Boolean = false;
  closeUserAccountStatusFormButton: Boolean = false;
  closeNoticeCategoryFormButton: Boolean = false;
  closeUpdateDetailsLoginFormButton: Boolean = false;
  closeUpdatePasswordLoginFormButton: Boolean = false;

  /* Loading Spinners */
  loadingSpinnerDegreeProgram: Boolean = true;
  loadingSpinnerBatch: Boolean = true;
  loadingSpinnerCreditWeighting: Boolean = true;
  loadingSpinnerLectureHall: Boolean = true;
  loadingSpinnerLectureSessionStatus: Boolean = true;
  loadingSpinnerUserAccountStatus: Boolean = true;
  loadingSpinnerNoticeCategory: Boolean = true;

  /* Add FormGroups */
  addDegreeProgramForm: FormGroup;
  addBatchForm: FormGroup;
  addCreditWeightingForm: FormGroup;
  addLectureHallForm: FormGroup;
  addLectureSessionStatusForm: FormGroup;
  addUserAccountStatusForm: FormGroup;
  addNoticeCategoryForm: FormGroup;
  updateDetailsLoginForm: FormGroup;
  updatePasswordLoginForm: FormGroup;

  awardingBodyUniversity;

  constructor(
    private sideMenuPageUserFaculty: SideMenuPage,
    private settingsService: FirebaseService,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private popoverController: PopoverController,
    private modalController: ModalController
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


    /* FormControls */
    this.addDegreeProgramForm = this.formBuilder.group({
      degreeCode: new FormControl('', Validators.required),
      degree: new FormControl('', Validators.required),
      awardingBodyUniversity: new FormControl('', Validators.required),
      academicPeriodYear: new FormControl('', Validators.required),
      academicPeriodSemester: new FormControl('', Validators.required),
      programDelivery: new FormControl('', Validators.required),
      programCoordinator: new FormControl('', Validators.required)
    });

    this.addBatchForm = this.formBuilder.group({
      batch: new FormControl('', Validators.required),
      degreeProgram: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });

    this.addCreditWeightingForm = this.formBuilder.group({
      creditWeighting: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });

    this.addLectureHallForm = this.formBuilder.group({
      lectureHall: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      approximateNoOfSeatsAvailable: new FormControl('', Validators.required)
    });

    this.addLectureSessionStatusForm = this.formBuilder.group({
      status: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.addUserAccountStatusForm = this.formBuilder.group({
      status: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.addNoticeCategoryForm = this.formBuilder.group({
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.updateDetailsLoginForm = this.formBuilder.group({
      emailAddress: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]+[!@#$%^&*]?'),
        Validators.minLength(10)
      ]))
    });

    this.updatePasswordLoginForm = this.formBuilder.group({
      emailAddress: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]+[!@#$%^&*]?'),
        Validators.minLength(10)
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


  // Retrieving published degree programs and their details from the firestore database
  publishedDegreePrograms;
  retrievePublishedDegreeProgram = () => 
    this.settingsService.retrievePublishedDegreeProgram(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => {
      this.loadingSpinnerDegreeProgram = false;
      this.publishedDegreePrograms = response;
    });

  // Retrieving published batches and their details from the firestore database
  publishedBatches;
  retrievePublishedBatch = () => 
    this.settingsService.retrievePublishedBatch(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => {
      this.loadingSpinnerBatch = false;
      this.publishedBatches = response;
    });
  
  // Retrieving published no of credit weightings and their details from the firestore database
  publishedNoOfCreditWeightings;
  retrievePublishedModuleCreditsWeighting = () => 
    this.settingsService.retrievePublishedModuleCreditsWeighting().subscribe(response => {
      this.loadingSpinnerCreditWeighting = false;
      this.publishedNoOfCreditWeightings = response;
    });

  // Retrieving published lecture halls and their details from the firestore database
  publishedLectureHalls;
  retrievePublishedLectureHalls = () => 
    this.settingsService.retrievePublishedLectureHalls(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => {
      this.loadingSpinnerLectureHall = false;
      this.publishedLectureHalls = response;
    });

  // Retrieving published lecture session statuses and their details from the firestore database
  publishedLectureSessionStatuses;
  retrievePublishedLectureSessionStatuses = () =>
    this.settingsService.retrievePublishedLectureSessionStatuses().subscribe(response => {
      this.loadingSpinnerLectureSessionStatus = false;
      this.publishedLectureSessionStatuses = response;
    });

  // Retrieving published user statuses and their details from the firestore database
  publishedUserStatuses;
  retrievePublishedUserStatuses = () =>
    this.settingsService.retrievePublishedUserStatuses().subscribe(response => {
      this.loadingSpinnerUserAccountStatus = false;
      this.publishedUserStatuses = response;
    });

  // Retrieving published notice categories and their details from the firestore database
  publishedNoticeCategory;
  retrievePublishedNoticeCategories = () =>
    this.settingsService.retrievePublishedNoticeCategories().subscribe(response => {
      this.loadingSpinnerNoticeCategory = false;
      this.publishedNoticeCategory = response;
    });


  // Retrieving registered lecturers from the firestore database
  registeredLecturers;
  retrieveRegisteredLecturers = () =>
    this.settingsService.retrieveRegisteredLecturers().subscribe(response => {
      this.registeredLecturers = response;
    });

  // Alert Box Implementation
  async alertNotice ( title: string, content: string ) {

    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });

    await alert.present();

  }

  /* Functions handling show add section and hide add section */
  openAddDegreeProgramForm(){
    if(this.addDegreeProgramButton == true){
      this.addDegreeProgramButton = false;
      this.closeDegreeProgramFormButton = true;
      this.addDegreeProgramFormSection = true;
    }
    else if(this.addDegreeProgramButton == false){
      this.addDegreeProgramForm.reset();
      this.addDegreeProgramButton = true;
      this.closeDegreeProgramFormButton = false;
      this.addDegreeProgramFormSection = false;
    }
  }

  openAddBatchForm(){
    if(this.addBatchButton == true){
      this.addBatchButton = false;
      this.closeBatchFormButton = true;
      this.addBatchFormSection = true;
    }
    else if(this.addBatchButton == false){
      this.addBatchForm.reset();
      this.addBatchButton = true;
      this.closeBatchFormButton = false;
      this.addBatchFormSection = false;
    }
  }

  openAddCreditWeightingForm(){
    if(this.addCreditWeightingButton == true){
      this.addCreditWeightingButton = false;
      this.closeCreditWeightingFormButton = true;
      this.addCreditWeightingFormSection = true;
    }
    else if(this.addCreditWeightingButton == false){
      this.addCreditWeightingForm.reset();
      this.addCreditWeightingButton = true;
      this.closeCreditWeightingFormButton = false;
      this.addCreditWeightingFormSection = false;
    }
  }

  openAddLectureHallForm(){
    if(this.addLectureHallButton == true){
      this.addLectureHallButton = false;
      this.closeLectureHallFormButton = true;
      this.addLectureHallFormSection = true;
    }
    else if(this.addLectureHallButton == false){
      this.addLectureHallForm.reset();
      this.addLectureHallButton = true;
      this.closeLectureHallFormButton = false;
      this.addLectureHallFormSection = false;
    }
  }

  openAddLectureSessionStatusForm(){
    if(this.addLectureSessionStatusButton == true){
      this.addLectureSessionStatusButton = false;
      this.closeLectureSessionStatusFormButton = true;
      this.addLectureSessionStatusFormSection = true;
    }
    else if(this.addLectureSessionStatusButton == false){
      this.addLectureSessionStatusForm.reset();
      this.addLectureSessionStatusButton = true;
      this.closeLectureSessionStatusFormButton = false;
      this.addLectureSessionStatusFormSection = false;
    }
  }

  openAddUserAccountStatusForm(){
    if(this.addUserAccountStatusButton == true){
      this.addUserAccountStatusButton = false;
      this.closeUserAccountStatusFormButton = true;
      this.addUserAccountStatusFormSection = true;
    }
    else if(this.addUserAccountStatusButton == false){
      this.addUserAccountStatusForm.reset();
      this.addUserAccountStatusButton = true;
      this.closeUserAccountStatusFormButton = false;
      this.addUserAccountStatusFormSection = false;
    }
  }

  openAddNoticeCategoryForm(){
    if(this.addNoticeCategoryButton == true){
      this.addNoticeCategoryButton = false;
      this.closeNoticeCategoryFormButton = true;
      this.addNoticeCategoryFormSection = true;
    }
    else if(this.addNoticeCategoryButton == false){
      this.addNoticeCategoryForm.reset();
      this.addNoticeCategoryButton = true;
      this.closeNoticeCategoryFormButton = false;
      this.addNoticeCategoryFormSection = false;
    }
  }

  openUpdateDetailsLoginForm(){
    if(this.updatePasswordLoginFormSection == true){
      this.updatePasswordLoginFormSection = false;
      this.closeUpdatePasswordLoginFormButton = false;

      this.updateDetailsLoginFormSection = true;
      this.closeUpdateDetailsLoginFormButton = true;
    }
    else if(this.updateDetailsLoginFormSection == false){
      this.updateDetailsLoginFormSection = true;
      this.closeUpdateDetailsLoginFormButton = true;
    }
    else if(this.updateDetailsLoginFormSection == true){
      this.updateDetailsLoginFormSection = false;
      this.closeUpdateDetailsLoginFormButton = false;
    }
  }

  openUpdatePasswordLoginForm(){
    if(this.updateDetailsLoginFormSection == true){
      this.updateDetailsLoginFormSection = false;
      this.closeUpdateDetailsLoginFormButton = false;

      this.updatePasswordLoginFormSection = true;
      this.closeUpdatePasswordLoginFormButton = true;
    }
    else if(this.updatePasswordLoginFormSection == false){
      this.updatePasswordLoginFormSection = true;
      this.closeUpdatePasswordLoginFormButton = true;
    }
    else if (this.updatePasswordLoginFormSection == true){
      this.updatePasswordLoginFormSection = false;
      this.closeUpdatePasswordLoginFormButton = false;
    }
  }

  // Update account details modal calling, opening modal
  async updateAccountDetailsModal(){
    const updateAccountDetailsModal = await this.modalController.create({
      component: UpdateAccountDetailsModalPage,
      // Passing value to the modal using 'componentProps'
      componentProps: {
        loggedInUserId: this.sideMenuPageUserFaculty.passLoggedInUserId()
      },
      // Disabling modal closing from any outside clicks
      backdropDismiss: false
    });
    updateAccountDetailsModal.present();
  }


  // Process of updating user account details
  doUpdateDetails(value){

    // Verifying entered login credentials
    this.settingsService.verifyLoginCredentials(value).then(async response => {
      
      // Opening update account details modal
      this.updateAccountDetailsModal();


    }, error => {
      console.log("Error during login credential verification: " + error);
      this.alertNotice("Error", "An error has occurred: " + error);
    });

  }


  // Update account password modal calling, opening modal
  async updateAccountPasswordModal(){
    const updateAccountPasswordModal = await this.modalController.create({
      component: UpdateAccountPasswordModalPage,
      // Disabling modal closing from any outside clicks
      backdropDismiss: false
    });
    updateAccountPasswordModal.present();
  }


  // Process of update user account password
  doUpdatePassword(value){

    // Verifying entered login credentials
    this.settingsService.verifyLoginCredentials(value).then(async response => {
      
      // Opening update account password modal
      this.updateAccountPasswordModal();

    }, error => {
      console.log("Error during login credential verification: " + error);
      this.alertNotice("Error", "An error has occurred: " + error);
    });

  }


  publishedAwardingBodyUniversityOfDegree;

  // Retrieving the awardingBodyUniversity for the selected degree
  getAwardingBodyUniversity(event){
    let selectedDegree = event.detail.value;
    console.log(selectedDegree);

    // Retrieving the awardingBody University of the selected degree
    this.settingsService.retrievingAwardingBodyUniversityOfDegree(selectedDegree, this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => (this.publishedAwardingBodyUniversityOfDegree =
      response.forEach(document => {
        let firestoreDoc: any = document.payload.doc.data();
        this.awardingBodyUniversity = firestoreDoc.awardingBodyUniversity;
        console.log(this.awardingBodyUniversity);
      })
    ));
  
    
  }


  /* Functions of calling serive functions and the values to firestore */
  // Process of adding a new degree program
  doAddDegreeProgram(value){

    // Adding values to the firestore database
    this.settingsService.addNewDegreeProgram(value, this.sideMenuPageUserFaculty.passLoggedInUserFaculty());

    this.alertNotice("Degree Program Added", "New degree program has been added.");

    this.addDegreeProgramForm.reset();

    if(this.addDegreeProgramButton == false){
      this.addDegreeProgramForm.reset();
      this.addDegreeProgramButton = true;
      this.closeDegreeProgramFormButton = false;
      this.addDegreeProgramFormSection = false;
    }

  }


  // Process of adding a new batch
  doAddBatch(value){

    // Adding values to the firestore database
    this.settingsService.addNewBatch(value, this.awardingBodyUniversity, this.sideMenuPageUserFaculty.passLoggedInUserFaculty());
  
    this.alertNotice("Batch Added", "New batch has been added.");

    this.addBatchForm.reset();

    if(this.addBatchButton == false){
      this.addBatchForm.reset();
      this.addBatchButton = true;
      this.closeBatchFormButton = false;
      this.addBatchFormSection = false;
    }

  }


  // Process of adding a new credit weighting
  doAddCreditWeighting(value){

    // Adding values to the firestore database
    this.settingsService.addNewCreditWeighting(value);

    this.alertNotice("Credit Weighting Added", "New credit weighting has been added.");

    this.addCreditWeightingForm.reset();

    if(this.addCreditWeightingButton == false){
      this.addCreditWeightingForm.reset();
      this.addCreditWeightingButton = true;
      this.closeCreditWeightingFormButton = false;
      this.addCreditWeightingFormSection = false;
    }

  }


  // Process of adding a new lecture hall
  doAddLectureHall(value){

    // Adding values to the firestore database
    this.settingsService.addNewLectureHall(value, this.sideMenuPageUserFaculty.passLoggedInUserFaculty());

    this.alertNotice("Lecture Hall Added", "New lecture hall has been added.");

    this.addLectureHallForm.reset();

    if(this.addLectureHallButton == false){
      this.addLectureHallForm.reset();
      this.addLectureHallButton = true;
      this.closeLectureHallFormButton = false;
      this.addLectureHallFormSection = false;
    }

  }


  // Process of adding a new lecture session status
  doAddLectureSessionStatus(value){

    // Adding values to the firestore database
    this.settingsService.addNewLectureSessionStatus(value);

    this.alertNotice("Lecture Session Status Added", "New lecture session status has been added.");

    this.addLectureSessionStatusForm.reset();

    if(this.addLectureSessionStatusButton == false){
      this.addLectureSessionStatusForm.reset();
      this.addLectureSessionStatusButton = true;
      this.closeLectureSessionStatusFormButton = false;
      this.addLectureSessionStatusFormSection = false;
    }

  }


  // Process of adding a new user account status
  doAddUserAccountStatus(value){

    // Adding values to the firestore database
    this.settingsService.addNewUserAccountStatus(value);

    this.alertNotice("User Account Status Added", "New user account status has been added.");

    this.addUserAccountStatusForm.reset();

    if(this.addUserAccountStatusButton == false){
      this.addUserAccountStatusForm.reset();
      this.addUserAccountStatusButton = true;
      this.closeUserAccountStatusFormButton = false;
      this.addUserAccountStatusFormSection = false;
    }

  }


  // Process of adding a notice category
  doAddNoticeCategory(value){

    // Adding values to the firestore database
    this.settingsService.addNewNoticeCategory(value);

    this.alertNotice("Notice Category Added", "New notice category has been added.");

    this.addNoticeCategoryForm.reset();

    if(this.addNoticeCategoryButton == false){
      this.addNoticeCategoryForm.reset();
      this.addNoticeCategoryButton = true;
      this.closeNoticeCategoryFormButton = false;
      this.addNoticeCategoryFormSection = false;
    }

  }


  /* Remove confirm boxes and process of removing */
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

            // Calling function to remove degree program
            this.settingsService.removeDegreeProgram(docId, this.sideMenuPageUserFaculty.passLoggedInUserFaculty());

            this.alertNotice("Removed", "Degree Program has been removed");
          }
        }
      ]
    });
    await alert.present();
  }

  // Confirm Box Implementation (Process of removing a batch)
  async removeBatch ( title: string, content: string, value) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Alert Box: Remove Batch Request Denied");
          }
        },
        {
          text: 'Continue',
          handler: () => {
            console.log("Alert Box: Remove Batch Request Accepted");

            let docId = value.payload.doc.id

            // Calling function to remove batch
            this.settingsService.removeBatch(docId, this.sideMenuPageUserFaculty.passLoggedInUserFaculty());

            this.alertNotice("Removed", "Batch has been removed");
          }
        }
      ]
    });
    await alert.present();
  }

  // Confirm Box Implementation (Process of removing a credit weighting)
  async removeCreditWeighting ( title: string, content: string, value) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Alert Box: Remove Credit Weighting Request Denied");
          }
        },
        {
          text: 'Continue',
          handler: () => {
            console.log("Alert Box: Remove Credit Weighting Request Accepted");

            let docId = value.payload.doc.id

            // Calling function to remove credit weightng
            this.settingsService.removeCreditWeighting(docId);

            this.alertNotice("Removed", "Credit Weighting has been removed");
          }
        }
      ]
    });
    await alert.present();
  }

  // Confirm Box Implementation (Process of removing a lecture hall)
  async removeLectureHall ( title: string, content: string, value) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Alert Box: Remove Lecture Hall Request Denied");
          }
        },
        {
          text: 'Continue',
          handler: () => {
            console.log("Alert Box: Remove Lecture Hall Request Accepted");

            let docId = value.payload.doc.id

            // Calling function to remove lecture hall
            this.settingsService.removeLectureHall(docId, this.sideMenuPageUserFaculty.passLoggedInUserFaculty());

            this.alertNotice("Removed", "Lecture hall has been removed");
          }
        }
      ]
    });
    await alert.present();
  }

  // Confirm Box Implementation (Process of removing a lecture session status)
  async removeLectureSessionStatus ( title: string, content: string, value) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Alert Box: Remove Lecture Session Status Request Denied");
          }
        },
        {
          text: 'Continue',
          handler: () => {
            console.log("Alert Box: Remove Lecture Session Status Request Accepted");

            let docId = value.payload.doc.id

            // Calling function to remove lecture session status
            this.settingsService.removeLectureSessionStatus(docId);

            this.alertNotice("Removed", "Lecture session status has been removed");
          }
        }
      ]
    });
    await alert.present();
  }

  // Confirm Box Implementation (Process of removing a user account status)
  async removeUserAccountStatus ( title: string, content: string, value) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Alert Box: Remove User Account Status Request Denied");
          }
        },
        {
          text: 'Continue',
          handler: () => {
            console.log("Alert Box: Remove User Account Status Request Accepted");

            let docId = value.payload.doc.id

            // Calling function to remove user account status
            this.settingsService.removeUserAccountStatus(docId);

            this.alertNotice("Removed", "User account status has been removed");
          }
        }
      ]
    });
    await alert.present();
  }

  // Confirm Box Implementation (Process of removing a notice category)
  async removeNoticeCategory ( title: string, content: string, value) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Alert Box: Remove Notice Category Request Denied");
          }
        },
        {
          text: 'Continue',
          handler: () => {
            console.log("Alert Box: Remove Notice Category Request Accepted");

            let docId = value.payload.doc.id

            // Calling function to remove notice category
            this.settingsService.removeNoticeCategory(docId);

            this.alertNotice("Removed", "Notice category has been removed");
          }
        }
      ]
    });
    await alert.present();
  }



  /* Opening Edit Modals */
  // Edit degree program modal calling, opening modal
  async openEditDegreProgramModal(value){
    console.log(value);

    const editDegreeProgramModal = await this.modalController.create({
      component: EditDegreeProgramModalPage,
      // Disabling modal closing from any outside clicks
      backdropDismiss: false
    });
    editDegreeProgramModal.present();
  }

  // Edit batch modal calling, opening modal
  async openEditBatchModal(value){
    console.log(value);

    const editBatchModal = await this.modalController.create({
      component: EditBatchModalPage,
      // Disabling modal closing from any outside clicks
      backdropDismiss: false
    });
    editBatchModal.present();
  }

  // Edit credit weighting modal calling, opening modal
  async openEditCreditWeightingModal(value){
    console.log(value);

    const editCreditWeightingModal = await this.modalController.create({
      component: EditCreditWeightingModalPage,
      // Disabling modal closing from any outside clicks
      backdropDismiss: false
    });
    editCreditWeightingModal.present();
  }

  // Edit lecture hall modal calling, opening modal
  async openEditLectureHallModal(value){
    console.log(value);

    const editLectureHallModal = await this.modalController.create({
      component: EditLectureHallModalPage,
      // Disabling modal closing from any outside clicks
      backdropDismiss: false
    });
    editLectureHallModal.present();
  }

  // Edit lecture session status modal calling, opening modal
  async openEditLectureSessionStatusModal(value){
    console.log(value);

    const editLectureSessionStatusModal = await this.modalController.create({
      component: EditLectureSessionStatusModalPage,
      // Disabling modal closing from any outside clicks
      backdropDismiss: false
    });
    editLectureSessionStatusModal.present();
  }

  // Edit user account status modal calling, opening modal
  async openEditUserAccountStatusModal(value){
    console.log(value);

    const editUserAccountStatusModal = await this.modalController.create({
      component: EditUserAccountStatusModalPage,
      // Disabling modal closing from any outside clicks
      backdropDismiss: false
    });
    editUserAccountStatusModal.present();
  }

  // Edit notice category modal calling, opening modal
  async openEditNoticeCategoryModal(value){
    console.log(value);

    const editNoticeCategoryModal = await this.modalController.create({
      component: EditNoticeCategoryModalPage,
      // Disabling modal closing from any outside clicks
      backdropDismiss: false
    });
    editNoticeCategoryModal.present();
  }

  



}
