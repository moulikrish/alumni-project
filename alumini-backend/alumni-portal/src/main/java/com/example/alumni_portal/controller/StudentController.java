package com.example.alumni_portal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.alumni_portal.model.Student;
import com.example.alumni_portal.model.User;
import com.example.alumni_portal.repository.StudentRepository;
import com.example.alumni_portal.repository.UserRepository;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "https://alumni-project-zoa5.vercel.app")

public class StudentController {

 @Autowired
 private StudentRepository repo;
 
 @Autowired
 private UserRepository userRepository;

 @GetMapping
 public List<Student> getStudents(){
  return repo.findAll();
 }
 
 @GetMapping("/{id}")
 public User getStudent(@PathVariable Long id){

     return userRepository.findById(id)
             .orElseThrow(() -> new RuntimeException("Student not found"));

 }


 @PutMapping("/{id}")
 public Student updateStudent(@PathVariable Long id, @RequestBody Student s){

     Student student = repo.findById(id).orElse(null);

     if(student == null){

         User user = userRepository.findById(id)
                 .orElseThrow(() -> new RuntimeException("User not found"));

         student = new Student();

         // DO NOT SET ID
         student.setName(user.getName());
         student.setEmail(user.getEmail());
         student.setDepartment(user.getDepartment());
     }

     student.setName(s.getName());
     student.setDepartment(s.getDepartment());
     student.setYear(s.getYear());
     student.setSkills(s.getSkills());

     Student savedStudent = repo.save(student);

     // update user table
     User user = userRepository.findById(id)
             .orElseThrow(() -> new RuntimeException("User not found"));

     user.setName(s.getName());
     user.setDepartment(s.getDepartment());
     user.setYear(s.getYear());
     user.setSkills(s.getSkills());

     userRepository.save(user);

     return savedStudent;
 }

 @DeleteMapping("/{id}")
 public void delete(@PathVariable Long id){

     // get student
     Student student = repo.findById(id).orElse(null);

     if(student != null){

         // delete from users table
    	 User user = userRepository.findByEmail(student.getEmail());
    	 
    	 if(user != null){
             userRepository.deleteById(user.getId());
         }

         // delete from students table
         repo.deleteById(id);
     }

 }
}
