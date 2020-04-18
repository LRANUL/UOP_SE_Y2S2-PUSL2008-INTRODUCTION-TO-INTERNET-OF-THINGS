import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreDetailsLecturerPopoverPage } from './more-details-lecturer-popover.page';

describe('MoreDetailsLecturerPopoverPage', () => {
  let component: MoreDetailsLecturerPopoverPage;
  let fixture: ComponentFixture<MoreDetailsLecturerPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDetailsLecturerPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreDetailsLecturerPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
