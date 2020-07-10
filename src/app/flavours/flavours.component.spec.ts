import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavoursComponent } from './flavours.component';

describe('FlavoursComponent', () => {
  let component: FlavoursComponent;
  let fixture: ComponentFixture<FlavoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
