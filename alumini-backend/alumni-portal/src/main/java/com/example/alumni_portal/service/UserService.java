package com.example.alumni_portal.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.alumni_portal.repository.UserRepository;
import com.example.alumni_portal.model.User;
import java.util.List;

@Service
public class UserService {

 @Autowired
 private UserRepository repo;

 public List<User> getAllUsers(){
  return repo.findAll();
 }

 public List<User> getAlumni(){
  return repo.findByRole("alumni");
 }

 public User approveAlumni(Long id){

  User u = repo.findById(id).get();
  u.setApproved(true);

  return repo.save(u);
 }
 
 public void deleteUser(Long id){
	 repo.deleteById(id);
	}

}
