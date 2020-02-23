import { TestBed } from '@angular/core/testing';

import { ProfitTableService } from './profit-table.service';

describe('ProfitTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfitTableService = TestBed.get(ProfitTableService);
    expect(service).toBeTruthy();
  });
});
