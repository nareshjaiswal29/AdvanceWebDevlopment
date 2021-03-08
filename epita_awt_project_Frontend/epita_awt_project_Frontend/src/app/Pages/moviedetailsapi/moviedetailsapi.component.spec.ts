import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetailsapiComponent } from './moviedetailsapi.component';

describe('MoviedetailsapiComponent', () => {
  let component: MoviedetailsapiComponent;
  let fixture: ComponentFixture<MoviedetailsapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviedetailsapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetailsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
