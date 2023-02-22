import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposterapiaComponent } from './equiposterapia.component';

describe('EquiposterapiaComponent', () => {
  let component: EquiposterapiaComponent;
  let fixture: ComponentFixture<EquiposterapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposterapiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposterapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
