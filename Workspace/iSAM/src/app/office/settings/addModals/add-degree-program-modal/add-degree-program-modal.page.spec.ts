import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDegreeProgramModalPage } from './add-degree-program-modal.page';

describe('AddDegreeProgramModalPage', () => {
  let component: AddDegreeProgramModalPage;
  let fixture: ComponentFixture<AddDegreeProgramModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDegreeProgramModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDegreeProgramModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
