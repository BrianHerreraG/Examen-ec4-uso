import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc,deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Pregunta from '../interfaces/pregunta.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(private http : HttpClient,private firestore: Firestore) { }

  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
  }

  getQuestionFire4c(){
    const aCollection = collection(this.firestore, 'preguntas4c');
    return collectionData(aCollection,  { idField: 'id' }) as Observable<Pregunta[]>;
  }

  getQuestionFire3c(){
    const aCollection = collection(this.firestore, 'preguntas3c');
    return collectionData(aCollection,  { idField: 'id' }) as Observable<Pregunta[]>;
  }

  addQuestion4c(pregunta: any){
    const aDoc = collection(this.firestore, 'preguntas4c')
    return addDoc(aDoc,pregunta);
  }

  addQuestion3c(pregunta: any){
    const aDoc = collection(this.firestore, 'preguntas3c')
    return addDoc(aDoc,pregunta);
  }

  deleteQuestion4c(pregunta: Pregunta){
    const dDoc = doc(this.firestore, 'preguntas4c/'+pregunta.id);
    return deleteDoc(dDoc);
  }

  deleteQuestion3c(pregunta: Pregunta){
    const dDoc = doc(this.firestore, 'preguntas3c/'+pregunta.id);
    return deleteDoc(dDoc);
  }

  updateQuestion4c(pregunta: any) {
    const dDoc = doc(this.firestore, 'preguntas4c/' + pregunta.id);
    return updateDoc(dDoc, pregunta);
  }

  updateQuestion3c(pregunta: any) {
    const dDoc = doc(this.firestore, 'preguntas3c/' + pregunta.id);
    return updateDoc(dDoc, pregunta);
  }

}
