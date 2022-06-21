import { TestBed } from '@angular/core/testing';

import { CouteauService } from './couteau.service';

describe('CouteauService', () => {
  let service: CouteauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouteauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
