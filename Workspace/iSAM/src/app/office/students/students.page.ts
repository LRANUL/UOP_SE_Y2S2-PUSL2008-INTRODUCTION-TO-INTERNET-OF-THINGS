import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SideMenuPage } from '../side-menu/side-menu.page';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  searchRegisteredStudentForm: FormGroup;

  registeredStudentCard: Boolean = false;

  showLoadingDots: Boolean = false;

  pageLoadSearchStudentText: Boolean = true;

  constructor(
    private studentsService: FirebaseService,
    private formBuilder: FormBuilder,
    private sideMenuPageUserFaculty: SideMenuPage,
    private alertController: AlertController,
    private modalController: ModalController,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {

    this.searchRegisteredStudentForm = this.formBuilder.group({
      nsbmId: new FormControl('', Validators.required),
      nsbmEmailAddress: new FormControl('', Validators.required)
    });



  }

}
