import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreDetailsPOToLecturersPopoverPage } from './more-details-poto-lecturers-popover.page';

describe('MoreDetailsPOToLecturersPopoverPage', () => {
  let component: MoreDetailsPOToLecturersPopoverPage;
  let fixture: ComponentFixture<MoreDetailsPOToLecturersPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDetailsPOToLecturersPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreDetailsPOToLecturersPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
