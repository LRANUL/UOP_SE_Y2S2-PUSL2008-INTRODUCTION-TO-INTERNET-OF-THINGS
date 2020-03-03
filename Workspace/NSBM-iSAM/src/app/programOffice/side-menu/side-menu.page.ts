import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  pagesTop = [
    {
      title: 'Dashboard',
      url: '/side-menu/dashboard',
      icon: '../../../assets/images/program-office/main-screen/dashboard.png'
    },
    {
      title: 'Notices',
      url: '/side-menu/notices',
      icon: '../../../assets/images/program-office/main-screen/notices.png'
    },
    {
      title: 'Student Attendance',
      url: '/side-menu/student-attendance',
      icon: '../../../assets/images/program-office/main-screen/student-attendance.png'
    },
    {
      title: 'Modules',
      url: '/side-menu/modules',
      icon: '../../../assets/images/program-office/main-screen/modules.png'
    },
    {
      title: 'Lecturers',
      url: '/side-menu/lecturers',
      icon: '../../../assets/images/program-office/main-screen/lecturers.png'
    }
  ];

  selectedPath = '';


  constructor(
    private router: Router,

  ) { 

    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    })

  }

  ngOnInit() {
  }

}
