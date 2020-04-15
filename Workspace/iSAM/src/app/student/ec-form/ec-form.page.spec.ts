import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EcFormPage } from './ec-form.page';

describe('EcFormPage', () => {
  let component: EcFormPage;
  let fixture: ComponentFixture<EcFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EcFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
