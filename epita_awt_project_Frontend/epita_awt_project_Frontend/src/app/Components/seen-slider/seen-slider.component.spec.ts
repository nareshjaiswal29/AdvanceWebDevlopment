import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenSliderComponent } from './seen-slider.component';

describe('SeenSliderComponent', () => {
  let component: SeenSliderComponent;
  let fixture: ComponentFixture<SeenSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeenSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
