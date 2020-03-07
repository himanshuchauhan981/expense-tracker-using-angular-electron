import { TestBed } from '@angular/core/testing';

import { ExpenseIncomeService } from './expense-income.service';

describe('ExpenseIncomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpenseIncomeService = TestBed.get(ExpenseIncomeService);
    expect(service).toBeTruthy();
  });
});
