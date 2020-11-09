import { TestBed } from '@angular/core/testing';

import { ManufacturerTypeService } from './manufacturer-type.service';

describe('ManufacturerTypeService', () => {
  let service: ManufacturerTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManufacturerTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
