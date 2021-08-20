import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresioncuadraticaComponent } from './regresioncuadratica.component';

describe('RegresioncuadraticaComponent', () => {
  let component: RegresioncuadraticaComponent;
  let fixture: ComponentFixture<RegresioncuadraticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegresioncuadraticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegresioncuadraticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
