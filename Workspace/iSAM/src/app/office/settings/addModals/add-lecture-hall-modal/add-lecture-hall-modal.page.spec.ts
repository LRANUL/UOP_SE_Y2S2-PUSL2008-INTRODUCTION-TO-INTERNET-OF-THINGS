import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddLectureHallModalPage } from './add-lecture-hall-modal.page';

describe('AddLectureHallModalPage', () => {
  let component: AddLectureHallModalPage;
  let fixture: ComponentFixture<AddLectureHallModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLectureHallModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLectureHallModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
