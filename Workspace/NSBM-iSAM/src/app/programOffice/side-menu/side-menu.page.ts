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
      icon: ''
    },
    {
      title: 'Notices',
      url: '/side-menu/notices',
      icon: ''
    },
    {
      title: 'Student Attendance',
      url: '/side-menu/student-attendance',
      icon: ''
    },
    {
      title: 'Modules',
      url: '/side-menu/modules',
      icon: ''
    },
    {
      title: 'Lecturers',
      url: '/side-menu/modules',
      icon: ''
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
