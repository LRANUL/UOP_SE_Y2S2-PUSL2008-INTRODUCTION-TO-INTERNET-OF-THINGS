import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreDetailsPOToStudentsPopoverPage } from './more-details-poto-students-popover.page';

describe('MoreDetailsPOToStudentsPopoverPage', () => {
  let component: MoreDetailsPOToStudentsPopoverPage;
  let fixture: ComponentFixture<MoreDetailsPOToStudentsPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDetailsPOToStudentsPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreDetailsPOToStudentsPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
