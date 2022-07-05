import { TestBed } from '@angular/core/testing';

import { RetailserviceService } from './retailservice.service';

describe('RetailserviceService', () => {
  let service: RetailserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
