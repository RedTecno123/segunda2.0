import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandersComponent } from './standers.component';

describe('StandersComponent', () => {
  let component: StandersComponent;
  let fixture: ComponentFixture<StandersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
