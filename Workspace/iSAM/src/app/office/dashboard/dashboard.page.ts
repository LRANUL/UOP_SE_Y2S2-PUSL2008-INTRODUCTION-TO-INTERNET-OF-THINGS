import { Component, OnInit, ViewChild } from '@angular/core';
import { SideMenuPage } from '../side-menu/side-menu.page';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AlertController, PopoverController } from '@ionic/angular';

import { Chart } from 'chart.js';
import { NotificationsPopoverPage } from '../notifications-popover/notifications-popover.page';
import { MoreDetailsTodaysLecturesPopoverPage } from './more-details-todays-lectures-popover/more-details-todays-lectures-popover.page';
import { MoreDetailsLecturesPopoverPage } from './more-details-lectures-popover/more-details-lectures-popover.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  currentDate;
  nextDate;

  currentDateNotice;
  dateThreeDaysBeforeCurrentDate

  noLectureSessionText: Boolean = false;

  showLoadingDotsTodaysLectureSession: Boolean = true;

  showLoadingDotsUpcomingLectureSession: Boolean = true;

  showLoadingDotsLatestLecturerPONotices: Boolean = true;

  noLectureSessionsTodayText: Boolean = false;

  noLecturerPONoticeText: Boolean = false;


  activeStudentUsersLoadingSpinner: Boolean = true;

  activeLecturerUsersLoadingSpinner: Boolean = true;

  activeProgramOfficeUsersLoadingSpinner: Boolean = true;

  activeStudentUserDetailsLoadingSpinner: Boolean = true;

  activeLecturerUserDetailsLoadingSpinner: Boolean = true;

  activeProgramOfficeUserDetailsLoadingSpinner: Boolean = true;

  onlineUsersCount: number = 0;
  onlineStudentUsersCount: number = 0;
  onlineLecturerUsersCount: number = 0;
  onlineProgramOfficeUsersCount: number = 0;
  onlineStudentUserDetails;
  onlineLecturerUserDetails;
  onlineProgramOfficeUserDetails;


  constructor(
    private sideMenuPageUserFaculty: SideMenuPage,
    private dashboardService: FirebaseService,
    private alertController: AlertController,
    private popoverController: PopoverController
  ) { }

  // Calling the ngOnInit() function when page is rendered on the user's screen
  ionViewWillEnter(){
    
    this.userActivityAreaChart();

    // Retrieving current date and time
    // Sample: Sun Apr 19 2020 18:44:52 GMT+0530 (India Standard Time)
    this.currentDate = new Date();

    // Setting currentDate time section to zero leaving the date as it is
    // Sample: Sun Apr 19 2020 00:00:00 GMT+0530 (India Standard Time)
    this.currentDate.setHours(0,0,0,0);

    // Retrieving current date and time
    // Sample: Sun Apr 19 2020 18:44:52 GMT+0530 (India Standard Time)
    this.nextDate = new Date();

    // Setting nextDate time section to zero leaving the date as it is
    // Sample: Sun Apr 19 2020 00:00:00 GMT+0530 (India Standard Time)
    this.nextDate.setHours(0,0,0,0);

    // Setting date section to increment by one
    // Sample: Sun Apr 20 2020 00:00:00 GMT+0530 (India Standard Time)
    this.nextDate.setDate(this.nextDate.getDate()+1);



    this.currentDateNotice = new Date();

    this.dateThreeDaysBeforeCurrentDate = new Date();

    this.dateThreeDaysBeforeCurrentDate.setDate(this.currentDate.getDate()-3);


    this.retrievePublishedLectureSessionsCurrentDate();

    this.retrievePublishedLecturerToPONotice();

    this.retrieveOnlineUserDetails();


    // Retrieving upcoming published lecture sessions from the firestore database and assigning them to the calendar
    this.dashboardService.retrievePublishedLectureSessionsUpcoming(this.sideMenuPageUserFaculty.passLoggedInUserFaculty()).subscribe(response => {
      
      // Setting loading spinner in upcoming lecture sessions to stop spinning
      this.showLoadingDotsUpcomingLectureSession = false;

      this.eventSourceUpcomingLecture = []; // Clearing the existing lecture sessions on the calendar before syncing 
      response.forEach(snap => {
        let eventLectureSession:any = snap.payload.doc.data();
        eventLectureSession.id = snap.payload.doc.id;
        eventLectureSession.title = eventLectureSession.moduleCode + "-" + eventLectureSession.moduleTitle;
        eventLectureSession.startTime = eventLectureSession.startDateTime.toDate();
        eventLectureSession.endTime = eventLectureSession.endDateTime.toDate();

        console.log(eventLectureSession);

        this.eventSourceUpcomingLecture.push(eventLectureSession);
      });

    }, error => {
      // Setting loading spinner in upcoming lecture sessions to stop spinning
      this.showLoadingDotsUpcomingLectureSession = false;

      console.log("Error: " + error);
      this.alertNotice("Error", "An error has occurred: " + error);
    });

  }


  ngOnInit() { }



  retrieveOnlineUserDetails = () => {
    // Retrieving user details of student users that have an account status "Online" from the firestore database
    this.dashboardService.retrieveOnlineUserDetails("studentUsers").subscribe(response => {
      this.activeStudentUsersLoadingSpinner = false;
      this.onlineStudentUsersCount = response.length;
      this.activeStudentUserDetailsLoadingSpinner = false;
      this.onlineStudentUserDetails = response;
    });

    // Retrieving user details of lecturer users that have an account status "Online" from the firestore database
    this.dashboardService.retrieveOnlineUserDetails("lecturerUsers").subscribe(response => {
      this.activeLecturerUsersLoadingSpinner = false;
      this.onlineLecturerUsersCount = response.length;
      this.activeLecturerUserDetailsLoadingSpinner = false;
      this.onlineLecturerUserDetails = response;
    });

    // Retrieving user details of program office users that have an account status "Online" from the firestore database
    this.dashboardService.retrieveOnlineUserDetails("programOfficeUsers").subscribe(response => {
      this.activeProgramOfficeUsersLoadingSpinner = false;
      this.onlineProgramOfficeUsersCount = response.length;
      this.activeProgramOfficeUserDetailsLoadingSpinner = false;
      this.onlineProgramOfficeUserDetails = response;
    });
  }

  // Process of returning two digits if there is only one digit in a number
  // Sample: Passing - 5, Returning - 05
  convertToTwoDigit(numericValue: number){
    if(numericValue < 10){
      return "0" + numericValue;
    }
    else{
      return numericValue;
    }
  }

  // Processing of adding all the active users
  calculateTotalOnlineUsers(onlineStudentUsers: number, onlineLecturerUsers: number, onlineProgramOfficeUsers: number){
    let totalActiveUsers = onlineStudentUsers + onlineLecturerUsers + onlineProgramOfficeUsers;

    // Checking if number has one or two digits
    // Adding one more digit if number only has one digit
    // Sample: Passing - 5, Returning = 05
    // Returning total number of active users 
    return this.convertToTwoDigit(totalActiveUsers);
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


  // User activity area chart (daily no of active users)
  bars: any;
  colorArray: any;
  
  @ViewChild('userActivityAreaChart', {static: true}) barChart;

  userActivityAreaChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
          label: 'User Activity',
          data: [320,353,339,323,342,359,335],
          backgroundColor: 'rgb(109, 156, 235)', 
          borderColor: 'rgb(109, 219, 235)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false,
              display: false
            },
            gridLines: {
              display: false,
            },
          }],
          xAxes: [{
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
            },
          }],
        }
      }
    });
  }


  // More details of today's lecture sessions popover
  async moreDetailsTodaysLectureSession(ev: Event, value){
    const moreDetailsTodaysLectureSessionPopover = await this.popoverController.create({
      component: MoreDetailsTodaysLecturesPopoverPage,
      componentProps: {
        lectureSessionDocId: value.payload.doc.id,
        degreeCode: value.payload.doc.data().degreeCode,
        degree: value.payload.doc.data().degree,
        awardingBodyUniversity:  value.payload.doc.data().awardingBodyUniversity,
        academicPeriodYear:  value.payload.doc.data().academicYear,
        academicPeriodSemester: value.payload.doc.data().academicSemester
      },
      event: ev
    });
    moreDetailsTodaysLectureSessionPopover.present();
  }


  // More details of Upcoming lecture sessions popover
  async moreDetailsUpcomingLectureSession(ev: Event, value){
    const moreDetailsLectureSessionPopover = await this.popoverController.create({
      component: MoreDetailsLecturesPopoverPage,
      componentProps: {
        lectureSessionDocId: value.id,
        batch: value.batch,
        lecturer: value.lecturer,
        lectureHall: value.lectureHall,
        degreeCode: value.degreeCode,
        degree: value.degree,
        awardingBodyUniversity: value.awardingBodyUniversity,
        academicPeriodYear: value.academicYear,
        academicPeriodSemester: value.academicSemester
      },
      event: ev
    });
    moreDetailsLectureSessionPopover.present();
  }
  
  
  // Retrieving published lecture sessions for the current date from the firestore database
  publishedLectureSessionsCurrentDate;
  retrievePublishedLectureSessionsCurrentDate = () => 
    this.dashboardService.retrievePublishedLectureSessionsCurrentDate(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), this.currentDate, this.nextDate).subscribe(response => {
      if (response.length > 0) {
        this.showLoadingDotsTodaysLectureSession = false;
        this.publishedLectureSessionsCurrentDate = response;
      }
      else {
        this.showLoadingDotsTodaysLectureSession = false;
        this.noLectureSessionsTodayText = true;
      }
  });


  // Retrieving published lecturer to PO notice from the current date to three days ago from the firestore database
  publishedLecturerToPONotices;
  retrievePublishedLecturerToPONotice = () => 
    this.dashboardService.retrievePublishedLecturerToPONotice(this.currentDateNotice, this.dateThreeDaysBeforeCurrentDate).subscribe(response => {
      if(response.length > 0){
        this.showLoadingDotsLatestLecturerPONotices = false;
        this.publishedLecturerToPONotices = response;
      }
      else{
        this.showLoadingDotsLatestLecturerPONotices = false;
        this.noLecturerPONoticeText = true;
      }
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




  // Declared to hold the events as array to store the sessions
  lectureSessionDocuments = [];

  // Lecture Calendar
  eventSourceUpcomingLecture;
  viewingUpcomingLecture;

  calendarUpcomingLecture = {
    mode: 'month',
    currentDate: new Date()
  }

  selectedDate = new Date();

  nextMonthLecture(){
    var frontSwipeLecture = document.getElementById('weeksUpcomingLectureCalendar').querySelector('.swiper-container')['swiper'];
    frontSwipeLecture.slideNext();
  }

  previousMonthLecture(){
    var backSwipeLecture = document.getElementById('weeksUpcomingLectureCalendar').querySelector('.swiper-container')['swiper'];
    backSwipeLecture.slidePrev();
  }

  onViewTitleChangedUpcomingLecture(title){
  //  console.log(title);
    this.viewingUpcomingLecture = title; 
  }

  onEventSelectedUpcomingLecture(event) {
  //  console.log("Lecture Session Selected: " + event.startTime + " - " + event.endTime + ", " + event.title);
  }

  onTimeSelectedUpcomingLecture(evt){
  //  console.log("Lecture Session Selected Time: " + evt.selectedTime + ", has sessions: " + (evt.events !== undefined && evt.events.length !== 0) +
  //    ", disabled: " + evt.disabled);

      if((evt.events !== undefined && evt.events.length !== 0) == false){
        this.noLectureSessionText = true;
        this.lectureSessionDocuments = [];
      }
      else if ((evt.events !== undefined && evt.events.length !== 0) == true){
        this.noLectureSessionText = false;
        this.lectureSessionDocuments = evt.events;
      }
  ///    console.log(this.lectureSessionDocuments);
  }

  onCurrentDateChangedUpcomingLecture(event: Date){
  //  console.log("Current Lecture Session Date Change: " + event);

    this.lectureSessionDocuments = [];
  }

  onRangeChangedUpcomingLecture(evt) {
  //  console.log("Lecture Session (Range) Changed: Start Time: " + evt.startTime + ", End Time: " + evt.endTime);
  }














}
