import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MultimediaService } from 'src/app/shared/Services/multimedia.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal-edit-mul',
  templateUrl: './modal-edit-mul.component.html',
  styleUrls: ['./modal-edit-mul.component.scss']
})
export class ModalEditMulComponent {
  @Input() multimedia:any;
  @Input() tipo!: number;

  Form = this.fb.group({
    Text: ['', [Validators.required]],
    url: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal,private service: MultimediaService) {
    
  }

  ngOnInit() {
    
    if (this.multimedia) {
      this.Form.patchValue({
        Text: this.multimedia.multiText,
        url: this.multimedia.url
      });
    }
  }

  editar(){

    Swal.fire({
      title: 'Quieres actualizar el registro?',
      showCancelButton: true,
      confirmButtonText: 'Si, actualizar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if(this.tipo == 4){
          this.service.updateMultimedia4c(this.procesarFormulario())
          .then(response => {
            Swal.fire('Actualizado con exito', '', 'success');
          }).catch(
            error => {
              Swal.fire('Error al actualizar', 'Intente de nuevo', 'error');
            }
          );
        }else{
          this.service.updateMultimedia3c(this.procesarFormulario())
          .then(response => {
            Swal.fire('Actualizado con exito', '', 'success');
          }).catch(
            error => {
              Swal.fire('Error al actualizar', 'Intente de nuevo', 'error');
            }
          );
        }


      this.activeModal.close();
      } 
    });
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

  eliminar(){

    Swal.fire({
      title: 'Quieres eliminar el registro?',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      confirmButtonColor: '#d33',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if(this.tipo == 4){
        this.service.deleteMultimedia4c(this.multimedia)
        .then(response => {
          Swal.fire('Eliminado con exito', '', 'success');
        }).catch(
          error => {
            Swal.fire('Error al eliminar', '', 'error');
          }
        );
        }else{
            this.service.deleteMultimedia3c(this.multimedia)
            .then(response => {
              Swal.fire('Eliminado con exito', '', 'success');
            }).catch(
              error => {
                Swal.fire('Error al eliminar', '', 'error');
              }
            );
        }

      this.activeModal.close();
      } 
    });
  }
}
