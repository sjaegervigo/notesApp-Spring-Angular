import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesList } from './notes/notes-list/notes-list';
import { NotesForm } from "./notes/notes-form/notes-form";
import { CommonModule } from '@angular/common';
import { Note } from './model/note';

@Component({
  selector: 'app-root',
  imports: [NotesList, NotesForm, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  showForm : boolean = false;
  selectedNote: Note | null = null;
  editModeOn: boolean = true;

  protected title = 'notes-frontend';

  openForm() {    
    this.selectedNote = null; // Reset selected note
    this.selectedNote = {
    id: undefined,
    title: '',
    content: '',
    archived: false,
    createdAt: undefined,
    updatedAt: null,
  };
    this.editModeOn = true; // Set edit mode to true for creating a new note
    this.showForm = true;
    console.log('Open Notes Form to create a new note');
  }

  openNote(event: { note: Note, editMode: boolean }) {
    this.selectedNote = event.note; // Set the selected note
    this.editModeOn = event.editMode; // Set edit mode based on the event
    this.showForm = true; // Show the form
    console.log('Open Notes Form to edit note:', this.selectedNote);
  }

  backToNotesList() {
    this.showForm = false;
    this.selectedNote = null; // Reset selected note
    console.log('Back to Notes List');
  }

}
