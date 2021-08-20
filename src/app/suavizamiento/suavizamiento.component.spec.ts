import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuavizamientoComponent } from './suavizamiento.component';

describe('SuavizamientoComponent', () => {
  let component: SuavizamientoComponent;
  let fixture: ComponentFixture<SuavizamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuavizamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuavizamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
