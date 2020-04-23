import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-degree-programs-modal',
  templateUrl: './degree-programs-modal.page.html',
  styleUrls: ['./degree-programs-modal.page.scss'],
})
export class DegreeProgramsModalPage implements OnInit {

  passedLoggedInUserFaculty = null;

  constructor(
    private modalController: ModalController,
    private degreeProgramService: FirebaseService,
    private navParams: NavParams
  ) { }

  ngOnInit() {

    // Getting the values from the parent page and assigning them to the variable
    this.passedLoggedInUserFaculty = this.navParams.get('loggedInUserFaculty');

    this.retrievePublishedDegreeProgram();

    this.degreeProgramService.retrievePublishedDegreeProgram(this.passedLoggedInUserFaculty).subscribe(response => (this.publishedDegreeProgramsCount = response));
  

  }

  // Retrieving the published degree programs and details from the firestore database
  publishedDegreePrograms;
  publishedDegreeProgramsCount;

  publishedDegreeProgramDegree;
  publishedDegreeProgramAwardingBodyUniversity;
  publishedDegreeProgramNoOfYears
  publishedDegreeProgramNoOfSemestersAnnaully;

  retrievePublishedDegreeProgram = () => {
    this.degreeProgramService.retrievePublishedDegreeProgram(this.passedLoggedInUserFaculty).subscribe(response => (this.publishedDegreePrograms = 
       response.forEach(document => {
        let firestoreDoc: any = document.payload.doc.data();
        this.publishedDegreeProgramDegree = firestoreDoc.degree;
        this.publishedDegreeProgramAwardingBodyUniversity = firestoreDoc.awardingBodyUniversity;
        this.publishedDegreeProgramNoOfYears = firestoreDoc.deliveryNoOfYears;
        this.publishedDegreeProgramNoOfSemestersAnnaully = firestoreDoc.deliveryNoOfSemestersAnnually;
      })
    ));
  }

 



  userSelectedAnOption: Boolean = false;

  userSelectedDegree;
  userSelectedAwardingBodyUniversity;

  assignSelectedValue(event){

    this.userSelectedDegree = event.detail.value;

    if(this.userSelectedDegree == null){
      this.userSelectedAnOption = false;
    }
    else if(this.userSelectedDegree != null){
      this.userSelectedAnOption = true;
    }

    if(this.userSelectedDegree == this.publishedDegreeProgramDegree){
      this.userSelectedAwardingBodyUniversity = this.publishedDegreeProgramAwardingBodyUniversity;
    }

  }

  loadFormContent(event){

  }

  // Implementation for closing the modal and passing the relevant data back to the parent page
  closeDegreeProgram(){
    this.modalController.dismiss({
      selectedAnOption: this.userSelectedAnOption,
      selectedDegree: this.userSelectedDegree,
      selectedAwardingBodyUniversity: this.userSelectedAwardingBodyUniversity
    });
  }
 

}
