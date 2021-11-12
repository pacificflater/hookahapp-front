import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixDetailMobileComponent } from './mix-detail-mobile.component';

describe('MixDetailComponent', () => {
  let component: MixDetailMobileComponent;
  let fixture: ComponentFixture<MixDetailMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixDetailMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixDetailMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
