import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgramOfficePage } from './program-office.page';

describe('ProgramOfficePage', () => {
  let component: ProgramOfficePage;
  let fixture: ComponentFixture<ProgramOfficePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramOfficePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramOfficePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
