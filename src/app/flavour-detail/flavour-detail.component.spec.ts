import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavourDetailComponent } from './flavour-detail.component';

describe('FlavourDetailComponent', () => {
  let component: FlavourDetailComponent;
  let fixture: ComponentFixture<FlavourDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavourDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavourDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
