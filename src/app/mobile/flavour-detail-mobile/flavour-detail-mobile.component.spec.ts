import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavourDetailMobileComponent } from './flavour-detail-mobile.component';

describe('FlavourDetailMobileComponent', () => {
  let component: FlavourDetailMobileComponent;
  let fixture: ComponentFixture<FlavourDetailMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavourDetailMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavourDetailMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
