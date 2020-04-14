import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  pagesTop = [
    {
      title: 'Dashboard',
      url: '/office/dashboard',
      icon: '../../../assets/images/office/main-screen/dashboard.png'
    },
    {
      title: 'Notices',
      url: '/office/notices',
      icon: '../../../assets/images/office/main-screen/notices.png'
    },
    {
      title: 'Student Attendance',
      url: '/office/student-attendance',
      icon: '../../../assets/images/office/main-screen/student-attendance.png'
    },
    {
      title: 'Lectures',
      url: '/office/lectures',
      icon: '../../../assets/images/office/main-screen/lectures.png'
    },
    {
      title: 'Modules',
      url: '/office/modules',
      icon: '../../../assets/images/office/main-screen/modules.png'
    },
    {
      title: 'Students',
      url: '/office/students',
      icon: '../../../assets/images/office/main-screen/students.png'
    },
    {
      title: 'Lecturers',
      url: '/office/lecturers',
      icon: '../../../assets/images/office/main-screen/lecturers.png'
    }
  ];

  selectedPath = '';


  constructor(
    private router: Router,
    private alertController: AlertController
  ) { 

    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    })

  }

  ngOnInit() {
  }


   // Logout Process
   logout(){

    this.alertnotice('Confirmation ', 'Are you sure you want to logout?');
    
  }

  // Alert Box Implementation (Logout)
  async alertnotice ( title: string, content: string ) {

    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: [

        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Logout request canceled");
          }
        },
        {
          text: 'Continue',
          handler: () => {
            this.router.navigate(["/login"]);
            console.log("User Logged Out");
          }
        }

      ]
    });

    await alert.present();

  }


}
