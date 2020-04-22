import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-more-information-popover',
  templateUrl: './more-information-popover.page.html',
  styleUrls: ['./more-information-popover.page.scss'],
})
export class MoreInformationPopoverPage implements OnInit {

  constructor(
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

}
