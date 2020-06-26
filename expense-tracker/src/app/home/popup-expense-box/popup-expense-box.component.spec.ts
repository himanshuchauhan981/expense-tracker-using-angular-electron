import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupExpenseBoxComponent } from './popup-expense-box.component';

describe('PopupExpenseBoxComponent', () => {
  let component: PopupExpenseBoxComponent;
  let fixture: ComponentFixture<PopupExpenseBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupExpenseBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupExpenseBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
