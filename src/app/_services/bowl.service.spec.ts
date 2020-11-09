import { TestBed } from '@angular/core/testing';

import { BowlService } from './bowl.service';

describe('BowlService', () => {
  let service: BowlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BowlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
