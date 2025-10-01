import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private apiUrl = 'http://localhost:8080/api/notes'; //revisar la URL de la API
  constructor(private http : HttpClient) { }

  getActiveNotes() {
    return this.http.get<Note[]>(this.apiUrl);
  }

  getArchivedNotes(){
    return this.http.get<Note[]>(`${this.apiUrl}/archived`);
  }

  createNote(newNote : { title: string, content: string}) {
    return this.http.post<Note>(this.apiUrl, newNote);

  }
  
  updateNote(note: Note) {
    return this.http.put<Note>(`${this.apiUrl}/${note.id}`, note);
  }

  deleteNote(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  archiveNote(id: number) {
    return this.http.patch<Note>(`${this.apiUrl}/${id}/archive`, {});
  }

  unarchiveNote(id: number) {
    return this.http.patch<Note>(`${this.apiUrl}/${id}/unarchive`, {});
  }  
 

}
