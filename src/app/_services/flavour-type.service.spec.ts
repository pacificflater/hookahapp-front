import { TestBed } from '@angular/core/testing';

import { FlavourTypeService } from './flavour-type.service';

describe('FlavourTypeService', () => {
  let service: FlavourTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlavourTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
