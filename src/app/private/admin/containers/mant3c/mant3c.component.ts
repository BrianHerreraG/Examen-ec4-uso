import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import { PreguntasService } from 'src/app/shared/Services/preguntas.service';

import Pregunta from 'src/app/shared/interfaces/pregunta.interface';
import { FirebaseStorageService } from 'src/app/shared/Services/firebasestorage.service';
import Swal from 'sweetalert2';
import { ModalAddPComponent } from '../modal-add-p/modal-add-p.component';
import { ModalEditPComponent } from '../modal-edit-p/modal-edit-p.component';

@Component({
  selector: 'app-mant3c',
  templateUrl: './mant3c.component.html',
  styleUrls: ['./mant3c.component.scss']
})
export class Mant3cComponent {

  items$3: Observable<Pregunta[]>;

  selectedFile3c: File | null = null;
  subiendo3c: number | null = null;
  urlActual3c: string = "";

  constructor(private modalService: NgbModal,private service: PreguntasService, private storage: FirebaseStorageService) {
    this.items$3 = service.getQuestionFire3c();
    this.descargarM3CPDF();
  }

	open(tipo: number) {
		const modalRef = this.modalService.open(ModalAddPComponent);
		modalRef.componentInstance.tipo = tipo;
	}


  editar(item: any, tipo: number) {
    console.log(item)
		const modalRef = this.modalService.open(ModalEditPComponent);
		modalRef.componentInstance.pregunta = item;
    modalRef.componentInstance.tipo = tipo;
	}

//SUBIR ARCHIVOS
onFileSelected3c(event: any) {
  this.selectedFile3c = event.target.files[0];
}



onUpload3C() {
  if (this.selectedFile3c) {
    this.subiendo3c=1;
    this.storage.upload3cPDF(this.selectedFile3c)
    .then(response => {
      this.subiendo3c = null;
      this.selectedFile3c = null;
      Swal.fire('Subido con exito', '', 'success');
    }).catch(
      error => {
        Swal.fire('Error al subir', '', 'error');
      }
    );
  }
}


onDelete3C() {
  Swal.fire({
    title: '¿Estás seguro de eliminar el manual de Tercera Categoria?',
    text: '¡No podrás revertir esto!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.storage.delete3cPDF()
        .then(response => {
          this.subiendo3c = null;
          this.selectedFile3c = null;
          Swal.fire('Eliminado con éxito', '', 'success');
        }).catch(
          error => {
            Swal.fire('Error al eliminar', '', 'error');
          }
        );
    }
  });
}


descargarM3CPDF(){
  this.storage.get3cPDFDownloadURL().then(response => {
    //Swal.fire('Agregado con exito', '', 'success');
    this.urlActual3c =response+"";
    console.log(response);
  }).catch(
    error => {
      //Swal.fire('Error al cargar los archivos', '', 'error');
    }
  );
}
}
