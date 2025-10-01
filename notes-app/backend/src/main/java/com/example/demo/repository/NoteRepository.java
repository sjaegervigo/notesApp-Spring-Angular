package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {	
	
	//List<Note> findByArchived(boolean archived);
	List<Note> findByArchivedOrderByCreatedAtAsc(boolean archived);
	
}
