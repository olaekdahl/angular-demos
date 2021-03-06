import { TestBed, inject } from '@angular/core/testing';

import { BlogserviceService } from './blogservice.service';

describe('BlogserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogserviceService]
    });
  });

  it('should be created', inject([BlogserviceService], (service: BlogserviceService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([BlogserviceService], (service: BlogserviceService) => {
    expect(service.getBlog(1)).toBe('/blogs/angular/1');
  }));
});
