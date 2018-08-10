import { TestBed, async, inject } from '@angular/core/testing';

import { ProuctDetailGuard } from './prouct-detail.guard';

describe('ProuctDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProuctDetailGuard]
    });
  });

  it('should ...', inject([ProuctDetailGuard], (guard: ProuctDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
