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

import com.example.alumni_portal.model.Job;
import com.example.alumni_portal.repository.JobRepository;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:5173")

public class JobController {

 @Autowired
 JobRepository repo;

 @GetMapping
 public List<Job> getJobs(){
  return repo.findAll();
 }

 @PostMapping
 public Job createJob(@RequestBody Job job){
  return repo.save(job);
 }

 @PutMapping("/{id}")
 public Job updateJob(@PathVariable Long id,@RequestBody Job job){

  Job existing = repo.findById(id).get();

  existing.setTitle(job.getTitle());
  existing.setCompany(job.getCompany());
  existing.setLocation(job.getLocation());
  existing.setDescription(job.getDescription());

  return repo.save(existing);

 }

 @DeleteMapping("/{id}")
 public void deleteJob(@PathVariable Long id){
  repo.deleteById(id);
 }

}
