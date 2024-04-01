import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddPComponent } from './containers/modal-add-p/modal-add-p.component';
import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PreguntasService } from 'src/app/shared/Services/preguntas.service';
import { ModalEditPComponent } from './containers/modal-edit-p/modal-edit-p.component';
import Pregunta from 'src/app/shared/interfaces/pregunta.interface';
import { FirebaseStorageService } from 'src/app/shared/Services/firebasestorage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  items$4: Observable<Pregunta[]>;
  items$3: Observable<Pregunta[]>;

  selectedFile4c: File | null = null;
  subiendo4c: number | null = null;
  urlActual4c: string = "";

  selectedFile3c: File | null = null;
  subiendo3c: number | null = null;
  urlActual3c: string = "";

  constructor(private modalService: NgbModal,private service: PreguntasService, private storage: FirebaseStorageService) {
    this.items$4 = service.getQuestionFire4c();
    this.items$3 = service.getQuestionFire3c();
    console.log(this.items$4);
    this.descargarM4CPDF();
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
onFileSelected4c(event: any) {
  this.selectedFile4c = event.target.files[0];
}

onFileSelected3c(event: any) {
  this.selectedFile3c = event.target.files[0];
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
