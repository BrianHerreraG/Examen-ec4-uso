import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preguntast3Component } from './preguntast3.component';

describe('Preguntast3Component', () => {
  let component: Preguntast3Component;
  let fixture: ComponentFixture<Preguntast3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Preguntast3Component]
    });
    fixture = TestBed.createComponent(Preguntast3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
