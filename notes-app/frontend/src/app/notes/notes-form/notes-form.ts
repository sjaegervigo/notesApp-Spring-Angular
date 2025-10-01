import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../model/note';
import { NotesService } from '../notes-service';

@Component({
  selector: 'app-notes-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './notes-form.html',
  styleUrl: './notes-form.css'
})
export class NotesForm {

  @Input() note: Note | null = null; // This will be set by the parent component when editing a note
  @Input() editModeOn: boolean = true; // This will be set by the parent component to indicate if we are in edit mode  

  @Output() cancel = new EventEmitter<void>();  

  newNote : Note | undefined ;  

  constructor(private notesService: NotesService) {}

  ngOnInit() {

  }

  onSubmit() {
    // if id, is updating
    if(this.note && this.note.id){
      this.notesService.updateNote(this.note).subscribe({
        next: (response) => {
          console.log('Note updated successfully:', response);
          this.editModeOn = false;
        },
        error: (error) => {
          console.error('Error updating note: ',error);
        }
      });
    } else if(this.note && !this.note.id) {
      // if not, is creating
      const {title, content} = this.note;

      this.notesService.createNote({title,content}).subscribe({
        next: (response) => {
          console.log('Note created successfully: ', response);
          this.editModeOn = false;
        },
        error: (error) => {        
          console.error('Error creating note: ', error);
        }

      });
    }    
  }

  backToNotesList() {
   this.cancel.emit();
  }

  switchEditMode() {
    this.editModeOn = !this.editModeOn;
  }
}
