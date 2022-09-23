import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  DocumentReference,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  userRef = collection(this.firestore, 'users');
  constructor(private firestore: Firestore) {}

  addUsers(users: Person): Promise<DocumentReference<Person>> {
    return addDoc(this.userRef, users) as Promise<DocumentReference<Person>>;
  }

  getUsers(): Observable<Person[]> {
    return collectionData(this.userRef, { idField: 'id' }) as Observable<
      Person[]
    >;
  }

  deleteUsers(user: Person): Promise<void> {
    const userRef = doc(this.firestore, `users/${user.id}`);
    return deleteDoc(userRef) as Promise<void>;
  }

  updateUSers(user: Person): Promise<void> {
    const userRef = doc(this.firestore, `users/${user.id}`);
    return setDoc(userRef, user) as Promise<void>;
  }

  getUserById(id: string) {
    const userRef = doc(this.firestore, `users/${id}`);
    return docData(userRef, { idField: 'id' }) as Observable<Person>;
  }
}
