import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresionlinealComponent } from './regresionlineal.component';

describe('RegresionlinealComponent', () => {
  let component: RegresionlinealComponent;
  let fixture: ComponentFixture<RegresionlinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegresionlinealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegresionlinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
