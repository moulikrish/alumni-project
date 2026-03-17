package com.example.alumni_portal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.alumni_portal.model.Mentor;
import com.example.alumni_portal.repository.MentorRepository;

@RestController
@RequestMapping("/api/mentors")
@CrossOrigin(origins = "https://alumni-project-zoa5.vercel.app")

public class MentorController {

 @Autowired
 MentorRepository repo;

 @GetMapping
 public List<Mentor> getMentors(){
  return repo.findAll();
 }

 @PostMapping
 public Mentor addMentor(@RequestBody Mentor mentor){
  return repo.save(mentor);
 }

 @PutMapping("/{id}")
 public Mentor update(@PathVariable Long id,@RequestBody Mentor mentor){

  Mentor m = repo.findById(id).get();

  m.setAlumniName(mentor.getAlumniName());
  m.setExpertise(mentor.getExpertise());
  m.setAvailability(mentor.getAvailability());

  return repo.save(m);

 }

 @DeleteMapping("/{id}")
 public void delete(@PathVariable Long id){
  repo.deleteById(id);
 }

}
