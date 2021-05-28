import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerDesktopComponent } from './manufacturer-desktop.component';

describe('ManufacturersComponent', () => {
  let component: ManufacturerDesktopComponent;
  let fixture: ComponentFixture<ManufacturerDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
