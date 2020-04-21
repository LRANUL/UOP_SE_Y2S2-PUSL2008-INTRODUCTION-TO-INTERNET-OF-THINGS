import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreDetailsLecturerToPOPopoverPage } from './more-details-lecturer-to-popopover.page';

describe('MoreDetailsLecturerToPOPopoverPage', () => {
  let component: MoreDetailsLecturerToPOPopoverPage;
  let fixture: ComponentFixture<MoreDetailsLecturerToPOPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDetailsLecturerToPOPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreDetailsLecturerToPOPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
