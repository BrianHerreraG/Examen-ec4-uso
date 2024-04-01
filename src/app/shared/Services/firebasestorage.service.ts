import { Injectable } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { deleteField } from 'firebase/firestore';
import { ref,uploadBytes, listAll,getDownloadURL, deleteObject } from 'firebase/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStorageService {
  constructor(private storage: Storage) {}

  upload4cPDF(file: File){

    //const filePath = `pdfs/${file.name}`;
    const fileRef = ref(this.storage,`manual4c/manual4cUSO.pdf`);
    //const task = this.storage.upload(filePath, file);

    return uploadBytes(fileRef,file);
  }

  get4cPDFDownloadURL() {
    const fileRef = ref(this.storage,`manual4c/manual4cUSO.pdf`);
    return getDownloadURL(fileRef);
  }

  delete4cPDF() {
    const fileRef = ref(this.storage,`manual4c/manual4cUSO.pdf`);
    return deleteObject(fileRef);
  }

  upload3cPDF(file: File){

    //const filePath = `pdfs/${file.name}`;
    const fileRef = ref(this.storage,`manual3c/manual3cUSO.pdf`);
    //const task = this.storage.upload(filePath, file);

    return uploadBytes(fileRef,file);
  }

  get3cPDFDownloadURL() {
    const fileRef = ref(this.storage,`manual3c/manual3cUSO.pdf`);
    return getDownloadURL(fileRef);
  }

  delete3cPDF() {
    const fileRef = ref(this.storage,`manual3c/manual3cUSO.pdf`);
    return deleteObject(fileRef);
  }

}

