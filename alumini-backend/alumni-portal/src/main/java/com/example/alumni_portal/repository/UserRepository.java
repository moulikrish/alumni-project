package com.example.alumni_portal.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.alumni_portal.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

    User findByEmail(String email);
    
    List<User> findByRole(String role);

    long countByRole(String role);
    
    void deleteByEmail(String email);

}