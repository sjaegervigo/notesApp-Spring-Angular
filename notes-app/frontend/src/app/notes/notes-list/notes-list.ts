import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NotesService } from '../notes-service';
import { Note } from '../../model/note';

@Component({
  selector: 'app-notes-list',
  imports: [CommonModule],
  templateUrl: './notes-list.html',
  styleUrl: './notes-list.css'
})
export class NotesList {
  
  
  @Output() createNote = new EventEmitter<void>();
  @Output() noteSelected = new EventEmitter<{note: Note, editMode: boolean}>();


  notesList : Note[] = [];

  constructor(private noteService : NotesService) {}

  getActiveNotesList(){
    this.notesList = []; // Clear the current notes list
    this.noteService.getActiveNotes().subscribe({
      next: (notes: Note[]) => {
        this.notesList = notes;
      },
      error: (error) => {
        console.error('Error fetching active notes:', error);
      }
    });
  }

  ngOnInit() {
    this.getActiveNotesList();
  }

  getArchivedNotesList(){
    this.notesList = []; // Clear the current notes list
    this.noteService.getArchivedNotes().subscribe({
      next: (notes: Note[]) => {
        this.notesList = notes;
      },
      error: (error) => {
        console.error('Error fetching archived notes:', error);
      }
    });    
  }  

  openNewNoteForm() {
    this.createNote.emit();
  }
  
  archiveUnarchiveNote(id : number) {
    if(this.notesList.find(note => note.id === id)?.archived) {
      // If the note is archived, we unarchive it
      this.noteService.unarchiveNote(id).subscribe({
        next: () => {
          console.log('Note unarchived successfully');
          this.getArchivedNotesList(); // Refresh the notes list after unarchiving
        },
        error: (error) => {
          console.error('Error unarchiving note:', error);
        }
      });
      return;
    } else {
      // Logic to archive a note
      // This could involve calling a service method to update the note's status
      this.noteService.archiveNote(id).subscribe({
        next: () => {
          console.log('Note archived successfully');
          this.getActiveNotesList(); // Refresh the notes list after archiving
        },
        error: (error) => {
          console.error('Error archiving note:', error);
        }
      });
    }      
    
  }

  viewSelectedNote(selectedNote : Note) {
    this.noteSelected.emit({note: selectedNote, editMode: false}); // readonly mode    
  }

  deleteNote(noteId: number) {
    if(this.notesList.at(noteId)?.archived){
      this.noteService.deleteNote(noteId).subscribe({
      next: () => {
        console.log('Note with id: ${noteId} deleted succesfully');
        this.getArchivedNotesList();
      },
      error: (error) => {
          console.error('Error deleting note:', error);
      }
    });
    } else {
      this.noteService.deleteNote(noteId).subscribe({
      next: () => {
        console.log(`Note with id: ${noteId} deleted succesfully`,noteId);
        this.getActiveNotesList();
      },
      error: (error) => {
          console.error('Error deleting note:', error);
      }
    });
    }    
  }

    

}
