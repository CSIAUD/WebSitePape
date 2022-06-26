import { TestBed } from '@angular/core/testing';

import { GuitareService } from './guitare.service';

describe('GuitareService', () => {
  let service: GuitareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
