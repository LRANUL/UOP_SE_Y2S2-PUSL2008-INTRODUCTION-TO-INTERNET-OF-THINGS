import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

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
      icon: 'assets/images/office/main-screen/dashboard.png'
    },
    {
      title: 'Notices',
      url: '/office/notices',
      icon: 'assets/images/office/main-screen/notices.png'
    },
    {
      title: 'Student Attendance',
      url: '/office/student-attendance',
      icon: 'assets/images/office/main-screen/student-attendance.png'
    },
    {
      title: 'Lectures',
      url: '/office/lectures',
      icon: 'assets/images/office/main-screen/lectures.png'
    },
    {
      title: 'Semester Calendar',
      url: '/office/semester-calendar',
      icon: 'assets/images/office/main-screen/semester-calendar.png'
    },
    {
      title: 'Modules',
      url: '/office/modules',
      icon: 'assets/images/office/main-screen/modules.png'
    },
    {
      title: 'Students',
      url: '/office/students',
      icon: 'assets/images/office/main-screen/students.png'
    },
    {
      title: 'Lecturers',
      url: '/office/lecturers',
      icon: 'assets/images/office/main-screen/lecturers.png'
    }
  ];

  selectedPath = '';



  constructor(
    private router: Router,
    private alertController: AlertController,
    private sideMenuService: FirebaseService,
    public angularFireAuth: AngularFireAuth,
    private loadingController: LoadingController
  ) { 

    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    })

  }

  // Declaring variable to store the faculty of the logged in user
  userFacultyFirestore: any;

  userDetailsAuth: any;

  ngOnInit() {

    // Retrieving the auth details of the logged in user
    this.userDetailsAuth = this.sideMenuService.userDetails();

    console.log(this.userDetailsAuth);
    console.log(this.userDetailsAuth.uid);

    this.retrieveLoggedInUserDetailsFirestore();


    // Updating the program office user account activity to ONLINE
    this.sideMenuService.updateProgramOfficeUserActivity("Online", this.passLoggedInUserId())
    .then(
        async response => {
            console.log("Program Office Account Activity Updated - ONLINE");
        }, 
        error => {
            this.alertNotice("Error", "An error has occurred: " + error);
        }
    );

    
    /*
    // If the user leaving the application the user will be logged out and account activity will be set to OFFLINE
    this.sideMenuService.checkUserActivity().then(
      async response => {
        if(response == "User Active"){
         
          console.log("User is active");
         
        }
      }, 
      error => {
        this.alertNotice("Error", "An error has occurred: " + error);
      }
    )
    */
    

  }


  // Retrieving the faculty of the logged in user and assign it the 'userFacultyFirestore' variable
  retrieveLoggedInUserDetailsFirestore = () =>  {
    this.sideMenuService.retrieveLoggedInUserDetailsProgramOffice(this.userDetailsAuth.uid).subscribe(userFacultyFirestore => (
      userFacultyFirestore.forEach(document => {
        let firestoreDoc:any = document.payload.doc.data();
        firestoreDoc = firestoreDoc.faculty;

        this.userFacultyFirestore = firestoreDoc;

        console.log(this.userFacultyFirestore);
      })
    ));
  }

  // Passing user faculty
  passLoggedInUserFaculty() {
    console.log(this.userFacultyFirestore);
    return this.userFacultyFirestore;
  }

  // Passing user id
  passLoggedInUserId() {
    return this.userDetailsAuth.uid;
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


    

  // Logout Process
  logout(){
    this.logoutAlert('Confirmation ', 'This will log you out, are you sure you want to logout?');
  }

  // Alert Box Implementation (Logout)
  async logoutAlert ( title: string, content: string ) {

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

            this.logoutProcessApproved();
            
            // Updating the program office user account activity to OFFLINE
            this.sideMenuService.updateProgramOfficeUserActivity("Offline", this.passLoggedInUserId())
            .then(
                async response => {
                    console.log("Program Office Account Activity Updated - OFFLINE");
                }, 
                error => {
                    this.alertNotice("Error", "An error has occurred: " + error);
                }
            );

           // this.sideMenuService.logoutUser();
           // this.router.navigate(["/login"]);
           // console.log("User Logged Out");

          }
        }

      ]
    });
    await alert.present();
  }

  // Implementation after logout confirmation is approved
  async logoutProcessApproved() {
    const loading = await this.loadingController.create({
      message: 'Logging Out..',
      duration: 2000
    });

    await loading.present();

    // Logout Process
    if(firebase.auth().currentUser){
      firebase.auth().signOut()
        .then(() => {
          console.log("Logout Successful");
        }).catch((error) => {
          console.log("Logout Process Failed, " + error);
          this.alertNotice("Error", "Logout Process Failed, " + error);
        });
    }
    // Redirecting user to login page
    this.router.navigate(["/login"]);
  }




}
