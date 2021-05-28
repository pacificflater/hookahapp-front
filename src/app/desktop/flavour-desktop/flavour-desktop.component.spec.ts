import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavourDesktopComponent } from './flavour-desktop.component';

describe('FlavoursComponent', () => {
  let component: FlavourDesktopComponent;
  let fixture: ComponentFixture<FlavourDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlavourDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavourDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
