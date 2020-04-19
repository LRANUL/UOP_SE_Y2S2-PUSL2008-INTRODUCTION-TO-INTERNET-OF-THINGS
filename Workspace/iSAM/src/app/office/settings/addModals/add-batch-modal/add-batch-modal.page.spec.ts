import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBatchModalPage } from './add-batch-modal.page';

describe('AddBatchModalPage', () => {
  let component: AddBatchModalPage;
  let fixture: ComponentFixture<AddBatchModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBatchModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBatchModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
