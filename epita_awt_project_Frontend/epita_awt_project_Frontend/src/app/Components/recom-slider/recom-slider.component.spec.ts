import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomSliderComponent } from './recom-slider.component';

describe('RecomSliderComponent', () => {
  let component: RecomSliderComponent;
  let fixture: ComponentFixture<RecomSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
