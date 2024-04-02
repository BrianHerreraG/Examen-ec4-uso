import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import Multimedia from 'src/app/shared/interfaces/pregunta.interface';
import { FirebaseStorageService } from 'src/app/shared/Services/firebasestorage.service';
import Swal from 'sweetalert2';
import { ModalAddPComponent } from '../modal-add-p/modal-add-p.component';
import { ModalEditPComponent } from '../modal-edit-p/modal-edit-p.component';
import { MultimediaService } from 'src/app/shared/Services/multimedia.service';
import { ModalAddMulComponent } from '../modal-add-mul/modal-add-mul.component';
import { ModalEditMulComponent } from '../modal-edit-mul/modal-edit-mul.component';

@Component({
  selector: 'app-multimed4c',
  templateUrl: './multimed4c.component.html',
  styleUrls: ['./multimed4c.component.scss']
})
export class Multimed4cComponent {

  multi4: Observable<Multimedia[]>;

  constructor(private modalService: NgbModal,private service: MultimediaService, private storage: FirebaseStorageService) {
    this.multi4 = service.getMultimediaFire4c();
  }

  open(tipo: number) {
		 const modalRef = this.modalService.open(ModalAddMulComponent);
		 modalRef.componentInstance.tipo = tipo;
	}


  editar(item: any, tipo: number) {
     console.log(item)
		 const modalRef = this.modalService.open(ModalEditMulComponent);
		 modalRef.componentInstance.multimedia = item;
     modalRef.componentInstance.tipo = tipo;
	}

}
