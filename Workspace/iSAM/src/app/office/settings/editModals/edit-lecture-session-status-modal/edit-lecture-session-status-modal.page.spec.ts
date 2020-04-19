import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditLectureSessionStatusModalPage } from './edit-lecture-session-status-modal.page';

describe('EditLectureSessionStatusModalPage', () => {
  let component: EditLectureSessionStatusModalPage;
  let fixture: ComponentFixture<EditLectureSessionStatusModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLectureSessionStatusModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditLectureSessionStatusModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
