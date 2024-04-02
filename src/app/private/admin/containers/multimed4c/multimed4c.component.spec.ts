import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multimed4cComponent } from './multimed4c.component';

describe('Multimed4cComponent', () => {
  let component: Multimed4cComponent;
  let fixture: ComponentFixture<Multimed4cComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Multimed4cComponent]
    });
    fixture = TestBed.createComponent(Multimed4cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
