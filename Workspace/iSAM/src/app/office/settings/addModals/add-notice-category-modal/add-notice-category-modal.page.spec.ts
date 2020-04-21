import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNoticeCategoryModalPage } from './add-notice-category-modal.page';

describe('AddNoticeCategoryModalPage', () => {
  let component: AddNoticeCategoryModalPage;
  let fixture: ComponentFixture<AddNoticeCategoryModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNoticeCategoryModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNoticeCategoryModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
