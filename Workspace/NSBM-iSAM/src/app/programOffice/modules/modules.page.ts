import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.page.html',
  styleUrls: ['./modules.page.scss'],
})
export class ModulesPage implements OnInit {

  moduleRegistrationForm: FormGroup;

  showLoadingSpinner: Boolean = true;

  constructor(
    private fbService: FirebaseService,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) { }

  ngOnInit() {

	this.retrieveRegisteredLecturers();
	
	// Setting loading dots to false after the contents has loaded.
    this.fbService.retrieveRegisteredLecturers().subscribe(() => this.showLoadingSpinner = false)

	this.moduleRegistrationForm = this.formBuilder.group({
		moduleCode: new FormControl(''),
		moduleTitle: new FormControl(''),
		creditWeighting: new FormControl(''),
		faculty: new FormControl(''),
		program: new FormControl(''),
		moduleLeader: new FormControl(''),
		teachingStaff: new FormControl('')
	});

  }

  registeredLecturers;



  retrieveRegisteredLecturers = () =>
  	this.fbService.retrieveRegisteredLecturers().subscribe(response => (this.registeredLecturers = response));

  // Alert Box Implementation
  async alertnotice ( title: string, content: string ) {

    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });

    await alert.present();

  }


  



}
