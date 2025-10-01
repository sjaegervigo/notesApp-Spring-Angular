package com.example.demo.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Note;
import com.example.demo.repository.NoteRepository;
import com.example.demo.service.NoteService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class NoteServiceImpl implements NoteService {
	
	private final NoteRepository noteRepository;
	
	public NoteServiceImpl (NoteRepository noteRepository) {
		this.noteRepository = noteRepository;
	}

	@Override
	public Note createNote(Note note) {		
		note.setArchived(false);
		note.setCreatedAt(LocalDateTime.now());
		note.setUpdatedAt(LocalDateTime.now());
		return noteRepository.save(note);
	}

	@Override
	public List<Note> getAllArchivedNotes() {
		return noteRepository.findByArchivedOrderByCreatedAtAsc(true);
	}

	@Override
	public List<Note> getAllActiveNotes() {
		return noteRepository.findByArchivedOrderByCreatedAtAsc(false);
	}

	@Override
	public Note updateNote(Long id, Note updatedNote) {
		Note existingNote = noteRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Note not found with id: " + id));
		existingNote.setTitle(updatedNote.getTitle());
		existingNote.setContent(updatedNote.getContent());
		existingNote.setArchived(updatedNote.isArchived());
		existingNote.setUpdatedAt(LocalDateTime.now());
		return noteRepository.save(existingNote);
		
	}

	@Override
	public void deleteNote(Long id) {
		Note existingNote = noteRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Note not found with id: " + id));
		noteRepository.delete(existingNote);
	}

	@Override
	public Note archiveNote(Long id) {
		Note existingNote = noteRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Note not found with id: " + id));
		
		existingNote.setArchived(true);
		
		return noteRepository.save(existingNote);
	}

	@Override
	public Note unarchiveNote(Long id) {
		Note existingNote = noteRepository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Note not found with id: " + id));
		
		existingNote.setArchived(false);
		
		return noteRepository.save(existingNote);
	}

}
