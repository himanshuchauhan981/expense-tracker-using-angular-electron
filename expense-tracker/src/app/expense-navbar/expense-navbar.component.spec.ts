import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseNavbarComponent } from './expense-navbar.component';

describe('ExpenseNavbarComponent', () => {
  let component: ExpenseNavbarComponent;
  let fixture: ComponentFixture<ExpenseNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
