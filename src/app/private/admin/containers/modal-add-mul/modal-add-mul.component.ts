import { Component,Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MultimediaService } from 'src/app/shared/Services/multimedia.service';
import { PreguntasService } from 'src/app/shared/Services/preguntas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-add-mul',
  templateUrl: './modal-add-mul.component.html',
  styleUrls: ['./modal-add-mul.component.scss']
})
export class ModalAddMulComponent {

  @Input() tipo!: number;

  Form = this.fb.group({
    Text: ['', [Validators.required]],
    url: ['', [Validators.required]]
  });

  correctIndex =1;
  options: any[] =[];

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal,private service: MultimediaService) {}

  guardar(){

    if(this.tipo == 4){
      this.service.addMultimedia4c(this.procesarFormulario())
      .then(response => {
        Swal.fire('Agregado con exito', '', 'success');
      }).catch(
        error => {
          Swal.fire('Error al agregar', '', 'error');
        }
      );
    }else{
      this.service.addMultimedia3c(this.procesarFormulario())
      .then(response => {
        Swal.fire('Agregado con exito', '', 'success');
      }).catch(
        error => {
          Swal.fire('Error al agregar', '', 'error');
        }
      );
    }



      this.activeModal.close();
  }

  procesarFormulario():any {
    const multiText = this.Form.value.Text;
    const url = this.Form.value.url;

    const body = {
      multiText,
      url,
    };

    return body;
  }
  
}
