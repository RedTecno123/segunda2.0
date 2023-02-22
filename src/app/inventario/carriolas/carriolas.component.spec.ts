import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriolasComponent } from './carriolas.component';

describe('CarriolasComponent', () => {
  let component: CarriolasComponent;
  let fixture: ComponentFixture<CarriolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarriolasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarriolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
