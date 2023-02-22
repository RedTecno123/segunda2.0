import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudacaminarComponent } from './ayudacaminar.component';

describe('AyudacaminarComponent', () => {
  let component: AyudacaminarComponent;
  let fixture: ComponentFixture<AyudacaminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudacaminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyudacaminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
