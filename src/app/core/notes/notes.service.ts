import { Injectable } from '@angular/core';

import { AngularFirestore, } from '@angular/fire/firestore';
import { Note } from './notes.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    private afs: AngularFirestore
  ) { }

  notesCollection = this.afs.collection('notes');

  async syncUserNote(note: Note) {
    return this.notesCollection.doc(note.userId).set({ note: note.data, userId: note.userId }, { merge: true });
  }

  readUserNote(userId: string) {
    return this.notesCollection.doc(userId).valueChanges();
  }
}
