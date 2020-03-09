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
      url: '/program-office/dashboard',
      icon: '../../../assets/images/program-office/main-screen/dashboard.png'
    },
    {
      title: 'Notices',
      url: '/program-office/notices',
      icon: '../../../assets/images/program-office/main-screen/notices.png'
    },
    {
      title: 'Student Attendance',
      url: '/program-office/student-attendance',
      icon: '../../../assets/images/program-office/main-screen/student-attendance.png'
    },
    {
      title: 'Modules',
      url: '/program-office/modules',
      icon: '../../../assets/images/program-office/main-screen/modules.png'
    },
    {
      title: 'Students',
      url: '/program-office/students',
      icon: '../../../assets/images/program-office/main-screen/students.png'
    },
    {
      title: 'Lecturers',
      url: '/program-office/lecturers',
      icon: '../../../assets/images/program-office/main-screen/lecturers.png'
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
