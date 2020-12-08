import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixDetailComponent } from './mix-detail.component';

describe('MixDetailComponent', () => {
  let component: MixDetailComponent;
  let fixture: ComponentFixture<MixDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
