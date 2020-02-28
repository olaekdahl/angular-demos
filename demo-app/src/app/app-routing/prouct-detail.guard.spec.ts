import { TestBed, async, inject } from '@angular/core/testing';

import { ProuctDetailGuard } from './prouct-detail.guard';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

describe('ProuctDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProuctDetailGuard],
      imports:[AppRoutingModule]
    });
  });

  it('should ...', inject([ProuctDetailGuard], (guard: ProuctDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
