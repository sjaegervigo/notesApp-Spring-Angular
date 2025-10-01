package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Note;

public interface NoteService {
	
	Note createNote(Note note);
	List<Note> getAllArchivedNotes();
	List<Note> getAllActiveNotes();
	Note updateNote(Long id, Note updatedNote);
	void deleteNote(Long id);
	Note archiveNote(Long id);
	Note unarchiveNote(Long id);	

}
