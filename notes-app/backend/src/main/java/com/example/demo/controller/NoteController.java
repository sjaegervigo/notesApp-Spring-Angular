package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Note;
import com.example.demo.service.NoteService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/notes")
public class NoteController {
	
	private final NoteService noteService;
	
	public NoteController(NoteService noteService) {
		this.noteService = noteService;
	}
	
	@PostMapping
	public ResponseEntity<Note> createNote(@RequestBody Note note){
		note.setId(null); // to create a note, we don't need an id
		return new ResponseEntity<>(noteService.createNote(note), HttpStatus.CREATED);
	}
	
	@GetMapping
	public List<Note> getActiveNotes(){
		return noteService.getAllActiveNotes();
	}
	
	@GetMapping("/archived")
	public List<Note> getArchivedNotes(){
		return noteService.getAllArchivedNotes();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Note> updateNote(@PathVariable Long id, @RequestBody Note updatedNote){
		return new ResponseEntity<>( noteService.updateNote(id, updatedNote), HttpStatus.OK);
	}
	
	@PatchMapping("/{id}/archive")
	public Note archiveNote(@PathVariable Long id) {
		return noteService.archiveNote(id);
	}
	
	@PatchMapping("/{id}/unarchive")
	public Note unarchiveNote(@PathVariable Long id) {
		return noteService.unarchiveNote(id);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteNote(@PathVariable Long id) {
		noteService.deleteNote(id);
		return ResponseEntity.noContent().build();
	}
}
