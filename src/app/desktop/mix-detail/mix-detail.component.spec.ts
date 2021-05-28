import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MixDetailDesctopComponent } from "./mix-detail.component";

describe('MixDetailComponent', () => {
  let component: MixDetailDesctopComponent;
  let fixture: ComponentFixture<MixDetailDesctopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixDetailDesctopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixDetailDesctopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
