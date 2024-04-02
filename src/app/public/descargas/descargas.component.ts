import { Component } from '@angular/core';
import { FirebaseStorageService } from 'src/app/shared/Services/firebasestorage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.scss']
})
export class DescargasComponent {

  urlM4C:string="";
  urlM3C:string="";

  constructor(private storage: FirebaseStorageService){
    this.descargarM4CPDF();
    this.descargarM3CPDF();
  }

  descargarM4CPDF(){
    this.storage.get4cPDFDownloadURL().then(response => {
      //Swal.fire('Agregado con exito', '', 'success');
      this.urlM4C =response+"";
      console.log(response);
    }).catch(
      error => {
        Swal.fire('Error al cargar uno de los archivos', '', 'info');
      }
    );
  }
  descargarM3CPDF(){
    this.storage.get3cPDFDownloadURL().then(response => {
      //Swal.fire('Agregado con exito', '', 'success');
      this.urlM3C =response+"";
      console.log(response);
    }).catch(
      error => {
        Swal.fire('Error al cargar uno de los archivos', '', 'info');
      }
    );
  }

}
