import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import {shoesInterface} from '../models/shoes'
import { Observable } from 'rxjs/internal/Observable';
import { Action } from 'rxjs/internal/scheduler/Action';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) {
    this.shoesCollection = afs.collection<shoesInterface>('shoes');
    this.shoes = this.shoesCollection.valueChanges();
   }
  private shoesCollection: AngularFirestoreCollection<shoesInterface>;
  private shoes: Observable<shoesInterface[]>;
  private shoesDoc: AngularFirestoreDocument<shoesInterface>;
  private shoe: Observable<shoesInterface>;

  getAllShoes(){
    return this.shoes = this.shoesCollection.snapshotChanges()
    .pipe(map(changes =>{
      return changes.map(action =>{
        const data = action.payload.doc.data() as shoesInterface;
        data.id = action.payload.doc.id;
        return data;
      })
    }))
  }
  getOneNoticia(idShoes: string){
    this.shoesDoc = this.afs.doc<shoesInterface>(`shoes/${idShoes}`);
    return this.shoe = this.shoesDoc.snapshotChanges().pipe(map(action =>{
      if(action.payload.exists == false){
        return null;
      }else{
        const data = action.payload.data() as shoesInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }
  addNoticias(shoes : shoesInterface):void{
    this.shoesCollection.add(shoes);
  }
  updateNoticias(shoes: shoesInterface):void{
    let idShoes = shoes.id;
    this.shoesDoc = this.afs.doc<shoesInterface>(`shoes/${idShoes}`);
    this.shoesDoc.update(shoes);
  }
  deleteNoticias(idShoes: String):void{
    this.shoesDoc = this.afs.doc<shoesInterface>(`shoes/${idShoes}`);
    this.shoesDoc.delete();
  }

}
