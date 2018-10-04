import { TestBed, inject } from '@angular/core/testing';

import { HttpbasicService } from './services/httpbasic.service';

describe('HttpbasicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpbasicService]
    });
  });

  it('should be created', inject([HttpbasicService], (service: HttpbasicService) => {
    expect(service).toBeTruthy();
  }));
});
