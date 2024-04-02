import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditMulComponent } from './modal-edit-mul.component';

describe('ModalEditMulComponent', () => {
  let component: ModalEditMulComponent;
  let fixture: ComponentFixture<ModalEditMulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditMulComponent]
    });
    fixture = TestBed.createComponent(ModalEditMulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
