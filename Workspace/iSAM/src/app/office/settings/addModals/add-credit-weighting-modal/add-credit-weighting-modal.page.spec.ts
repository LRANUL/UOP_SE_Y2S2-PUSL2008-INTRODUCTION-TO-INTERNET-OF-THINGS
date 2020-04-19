import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCreditWeightingModalPage } from './add-credit-weighting-modal.page';

describe('AddCreditWeightingModalPage', () => {
  let component: AddCreditWeightingModalPage;
  let fixture: ComponentFixture<AddCreditWeightingModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreditWeightingModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCreditWeightingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
