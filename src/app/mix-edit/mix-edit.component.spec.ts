import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixEditComponent } from './mix-edit.component';

describe('MixDetailComponent', () => {
  let component: MixEditComponent;
  let fixture: ComponentFixture<MixEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
