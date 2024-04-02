import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mant4cComponent } from './mant4c.component';

describe('Mant4cComponent', () => {
  let component: Mant4cComponent;
  let fixture: ComponentFixture<Mant4cComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mant4cComponent]
    });
    fixture = TestBed.createComponent(Mant4cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
