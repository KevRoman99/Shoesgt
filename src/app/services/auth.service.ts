import { UserInterface } from './../models/users';
import { AngularFirestoreDocument,AngularFirestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }

  registerUser(email: string, password: string){
    return new Promise((resolve, reject)=>{
      this.afsAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(userData => {
        resolve(userData),
        this.updateUserData(userData.user)
      }).catch(err => console.log(reject(err)))
    });
  }
  loginEmailUSer(email: string, password: string){
    return new Promise((resolve, reject) =>{
      this.afsAuth.auth.signInWithEmailAndPassword(email,password)
      .then(userData => resolve(userData),
        err => reject (err));
    });
  }
  loginFacebookUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
    .then((credential)=>{
      this.updateUserData(credential.user)
    })
  }
  loginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((credential)=>{
      this.updateUserData(credential.user)
    })
    
  }
  logoutUser(){
    return this.afsAuth.auth.signOut();
  }

  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  private updateUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface ={
      id: user.uid,
      email: user.email,
      role: {
        editor: true
      }
    }
    return userRef.set(data, { merge: true})
  }
  isUserAdmin(userUid){
    return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }
}