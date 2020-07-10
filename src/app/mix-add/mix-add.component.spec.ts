import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixAddComponent } from './mix-add.component';

describe('MixAddComponent', () => {
  let component: MixAddComponent;
  let fixture: ComponentFixture<MixAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
