import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerDetailMobileComponent } from './manufacturer-detail-mobile.component';

describe('ManufacturerDetailMobileComponent', () => {
  let component: ManufacturerDetailMobileComponent;
  let fixture: ComponentFixture<ManufacturerDetailMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerDetailMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerDetailMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
