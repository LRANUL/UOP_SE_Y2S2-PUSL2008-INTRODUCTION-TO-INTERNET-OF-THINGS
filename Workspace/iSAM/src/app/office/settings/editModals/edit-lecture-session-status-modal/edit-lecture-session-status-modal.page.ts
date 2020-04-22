import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-lecture-session-status-modal',
  templateUrl: './edit-lecture-session-status-modal.page.html',
  styleUrls: ['./edit-lecture-session-status-modal.page.scss'],
})
export class EditLectureSessionStatusModalPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  closeEditLectureSessionStatusModal(){
    this.modalController.dismiss();
  }

}
