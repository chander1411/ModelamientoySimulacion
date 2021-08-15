import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturadatosComponent } from './lecturadatos.component';

describe('LecturadatosComponent', () => {
  let component: LecturadatosComponent;
  let fixture: ComponentFixture<LecturadatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturadatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturadatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
