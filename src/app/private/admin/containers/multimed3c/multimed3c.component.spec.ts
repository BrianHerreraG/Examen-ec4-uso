import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multimed3cComponent } from './multimed3c.component';

describe('Multimed3cComponent', () => {
  let component: Multimed3cComponent;
  let fixture: ComponentFixture<Multimed3cComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Multimed3cComponent]
    });
    fixture = TestBed.createComponent(Multimed3cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
