import { Component, OnInit, ViewChild } from '@angular/core';
import { SideMenuPage } from '../side-menu/side-menu.page';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AlertController, PopoverController } from '@ionic/angular';

import { Chart } from 'chart.js';
import { NotificationsPopoverPage } from '../notifications-popover/notifications-popover.page';

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

  constructor(
    private sideMenuPageUserFaculty: SideMenuPage,
    private dashboardService: FirebaseService,
    private alertController: AlertController,
    private popoverController: PopoverController
  ) { 
    console.log("con");
  }

  // Calling the ngOnInit() function when page is rendered on the user's screen
  ionViewWillEnter(){
    this.ngOnInit();
  }

  ngOnInit() {

    console.log("ng");

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
        labels: ['16-4-2020', '17-4-2020', '18-4-2020', '19-4-2020', '20-4-2020', '21-4-2020', '22-4-2020', '23-4-2020'],
        datasets: [{
          label: 'User Activity',
          data: [10, 12, 12, 8, 10, 20, 22, 30],
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


  moreDetailsTodaysLectureSession(event, value){

  }

  moreDetailsUpcomingLectureSession(event, value){

  }
  
  // Retrieving published lecture sessions for the current date from the firestore datbase
  publishedLectureSessionsCurrentDate;
  retrievePublishedLectureSessionsCurrentDate = () => 
    this.dashboardService.retrievePublishedLectureSessionsCurrentDate(this.sideMenuPageUserFaculty.passLoggedInUserFaculty(), this.currentDate, this.nextDate).subscribe(response => {
      if (response.length > 0) {
        this.showLoadingDotsTodaysLectureSession = false;
        this.publishedLectureSessionsCurrentDate = response;
      }
      else {
        this.noLectureSessionText = true;
      }
  });


  // Retriving published lecturer to PO notice from the current date to three days ago from the firestore database
  publishedLecturerToPONotices;
  retrievePublishedLecturerToPONotice = () => 
    this.dashboardService.retrievePublishedLecturerToPONotice(this.currentDateNotice, this.dateThreeDaysBeforeCurrentDate).subscribe(response => {
      this.showLoadingDotsLatestLecturerPONotices = false;
      this.publishedLecturerToPONotices = response;
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
    console.log(title);
    this.viewingUpcomingLecture = title; 
  }

  onEventSelectedUpcomingLecture(event) {
    console.log("Lecture Session Selected: " + event.startTime + " - " + event.endTime + ", " + event.title);
  }

  onTimeSelectedUpcomingLecture(evt){
    console.log("Lecture Session Selected Time: " + evt.selectedTime + ", has sessions: " + (evt.events !== undefined && evt.events.length !== 0) +
      ", disabled: " + evt.disabled);

      if((evt.events !== undefined && evt.events.length !== 0) == false){
        this.noLectureSessionText = true;
        this.lectureSessionDocuments = [];
      }
      else if ((evt.events !== undefined && evt.events.length !== 0) == true){
        this.noLectureSessionText = false;
        this.lectureSessionDocuments = evt.events;
      }
      console.log(this.lectureSessionDocuments);
  }

  onCurrentDateChangedUpcomingLecture(event: Date){
    console.log("Current Lecture Session Date Change: " + event);

    this.lectureSessionDocuments = [];
  }

  onRangeChangedUpcomingLecture(evt) {
    console.log("Lecture Session (Range) Changed: Start Time: " + evt.startTime + ", End Time: " + evt.endTime);
  }














}
