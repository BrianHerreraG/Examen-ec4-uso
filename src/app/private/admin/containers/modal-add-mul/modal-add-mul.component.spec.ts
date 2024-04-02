import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddMulComponent } from './modal-add-mul.component';

describe('ModalAddMulComponent', () => {
  let component: ModalAddMulComponent;
  let fixture: ComponentFixture<ModalAddMulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddMulComponent]
    });
    fixture = TestBed.createComponent(ModalAddMulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
