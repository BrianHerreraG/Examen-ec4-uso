import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import Multimedia from 'src/app/shared/interfaces/pregunta.interface';
import { FirebaseStorageService } from 'src/app/shared/Services/firebasestorage.service';
import { MultimediaService } from 'src/app/shared/Services/multimedia.service';
import { ModalAddMulComponent } from '../modal-add-mul/modal-add-mul.component';
import { ModalEditMulComponent } from '../modal-edit-mul/modal-edit-mul.component';
@Component({
  selector: 'app-multimed3c',
  templateUrl: './multimed3c.component.html',
  styleUrls: ['./multimed3c.component.scss']
})
export class Multimed3cComponent {

  multi3: Observable<Multimedia[]>;

  constructor(private modalService: NgbModal,private service: MultimediaService, private storage: FirebaseStorageService) {
    this.multi3 = service.getMultimediaFire3c();
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
