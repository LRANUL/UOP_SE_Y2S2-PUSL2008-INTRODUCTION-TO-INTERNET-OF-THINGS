import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddLectureSessionStatusModalPage } from './add-lecture-session-status-modal.page';

describe('AddLectureSessionStatusModalPage', () => {
  let component: AddLectureSessionStatusModalPage;
  let fixture: ComponentFixture<AddLectureSessionStatusModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLectureSessionStatusModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLectureSessionStatusModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
