import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentAttendancePage } from './student-attendance.page';

describe('StudentAttendancePage', () => {
  let component: StudentAttendancePage;
  let fixture: ComponentFixture<StudentAttendancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAttendancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
