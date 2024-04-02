import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc,deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Multimedia from '../interfaces/pregunta.interface';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  constructor(private http : HttpClient,private firestore: Firestore) { }

  getMultimediaFire4c(){
    const aCollection = collection(this.firestore, 'multimedia4c');
    return collectionData(aCollection,  { idField: 'id' }) as Observable<Multimedia[]>;
  }

  getMultimediaFire3c(){
    const aCollection = collection(this.firestore, 'multimedia3c');
    return collectionData(aCollection,  { idField: 'id' }) as Observable<Multimedia[]>;
  }

  addMultimedia4c(multimedia: any){
    const aDoc = collection(this.firestore, 'multimedia4c')
    return addDoc(aDoc,multimedia);
  }

  addMultimedia3c(multimedia: any){
    const aDoc = collection(this.firestore, 'multimedia3c')
    return addDoc(aDoc,multimedia);
  }

  deleteMultimedia4c(multimedia: Multimedia){
    const dDoc = doc(this.firestore, 'multimedia4c/'+multimedia.id);
    return deleteDoc(dDoc);
  }

  deleteMultimedia3c(multimedia: Multimedia){
    const dDoc = doc(this.firestore, 'multimedia3c/'+multimedia.id);
    return deleteDoc(dDoc);
  }

  updateMultimedia4c(multimedia: any) {
    const dDoc = doc(this.firestore, 'multimedia4c/' + multimedia.id);
    return updateDoc(dDoc, multimedia);
  }

  updateMultimedia3c(multimedia: any) {
    const dDoc = doc(this.firestore, 'multimedia3c/' + multimedia.id);
    return updateDoc(dDoc, multimedia);
  }

}
