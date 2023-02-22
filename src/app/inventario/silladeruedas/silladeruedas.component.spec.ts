import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilladeruedasComponent } from './silladeruedas.component';

describe('SilladeruedasComponent', () => {
  let component: SilladeruedasComponent;
  let fixture: ComponentFixture<SilladeruedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilladeruedasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilladeruedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
