import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.page.html',
  styleUrls: ['./notices.page.scss'],
})
export class NoticesPage implements OnInit {


  newStudentNoticeForm: FormGroup;

  showLoadingDot: Boolean = true;


  constructor(
    private formBuilder: FormBuilder,
    private fbService: FirebaseService,
    private alertController: AlertController
  ) { }

  ngOnInit() {

    this.fbService.retrieveSentStudentNotices();




    // New Student Notice Form
    this.newStudentNoticeForm = this.formBuilder.group({
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
      noticeRecipientBatch: new FormControl(''),
      noticeAuthor: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });

/*
    // New Lecturer Notice Form
    this.newStudentNoticeForm = this.formBuilder.group({
      noticeTitle: new FormControl('', Validators.compose([
        Validators.required
      ])),
      noticeDescription: new FormControl('', Validators.compose([
        Validators.required
      ])),
      noticeCategory: new FormControl('', Validators.compose([
        Validators.required
      ])),
      noticeRecipient: new FormControl(''),
      noticeAuthor: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
    */

  }

  // Retrieving sent student notices and assigning them
  sentStudentNotices;
  retrieveSentStudentNotices = () =>
    this.fbService.retrieveSentStudentNotices().subscribe(response => (this.sentStudentNotices = response));






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
  async alertnotice ( title: string, content: string ) {

    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });

    await alert.present();

  }


  // Confirm Box Implementation (Create New Student Notice)
  async confirmNotice ( title: string, content: string, value) {

    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: [

        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Create New Student Notice Request Denied");
          }
        },
        {
          text: 'Continue',
          handler: () => {
            console.log("Create New Student Notice Request Accepted");

            // Adding new student details into firestore if the user agrees
            this.fbService.newStudentNoticeDetailsSubmission(value);

            // Displaying new student notice created confirmation in alert message 
            this.alertnotice('New Student Notice Created Successfully', 'Student notice has been created successfully. Please refer the "Notices Sent to Students" section to view notice.');

            // Resetting the new student notice form to initial state
            this.newStudentNoticeForm.setValue({
              noticeTitle: "",
              noticeDescription: "",
              noticeCategory: "",
              noticeRecipientModule: "",
              noticeRecipientBatch: "",
              noticeAuthor: "",
            })

          }
        }

      ]
    });

    await alert.present();

  }



  // Creating new student notice
  doNewStudentNoticeSubmission(value){

    // Displaying confirm box requesting to continue to firestore data submission
    this.confirmNotice('Do you want to continue?', 'Click on continue to create new student notice', value);    
    
  }




}
