import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mant3cComponent } from './mant3c.component';

describe('Mant3cComponent', () => {
  let component: Mant3cComponent;
  let fixture: ComponentFixture<Mant3cComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mant3cComponent]
    });
    fixture = TestBed.createComponent(Mant3cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
