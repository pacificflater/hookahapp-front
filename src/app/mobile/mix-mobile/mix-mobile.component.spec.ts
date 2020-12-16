import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixMobileComponent } from './mix-mobile.component';

describe('MixMobileComponent', () => {
  let component: MixMobileComponent;
  let fixture: ComponentFixture<MixMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
