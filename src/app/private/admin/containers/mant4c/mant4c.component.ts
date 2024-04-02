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
  selector: 'app-mant4c',
  templateUrl: './mant4c.component.html',
  styleUrls: ['./mant4c.component.scss']
})
export class Mant4cComponent {

  items$4: Observable<Pregunta[]>;

  selectedFile4c: File | null = null;
  subiendo4c: number | null = null;
  urlActual4c: string = "";

  constructor(private modalService: NgbModal,private service: PreguntasService, private storage: FirebaseStorageService) {
    this.items$4 = service.getQuestionFire4c();
    this.descargarM4CPDF();
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
onFileSelected4c(event: any) {
  this.selectedFile4c = event.target.files[0];
}

onUpload4C() {
  if (this.selectedFile4c) {
    this.subiendo4c=1;
    this.storage.upload4cPDF(this.selectedFile4c)
    .then(response => {
      this.subiendo4c = null;
      this.selectedFile4c = null;
      Swal.fire('Subido con exito', '', 'success');
    }).catch(
      error => {
        Swal.fire('Error al subir', '', 'error');
      }
    );
  }
}

descargarM4CPDF(){
  this.storage.get4cPDFDownloadURL().then(response => {
    //Swal.fire('Agregado con exito', '', 'success');
    this.urlActual4c =response+"";
    console.log(response);
  }).catch(
    error => {
     // Swal.fire('Error al cargar los archivos', '', 'error');
    }
  );
}

onDelete4C() {
  Swal.fire({
    title: '¿Estás seguro de eliminar el manual de Cuarta Categoria?',
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
          this.subiendo4c = null;
          this.selectedFile4c = null;
          Swal.fire('Eliminado con éxito', '', 'success');
        }).catch(
          error => {
            Swal.fire('Error al eliminar', '', 'error');
          }
        );
    }
  });
}




}
