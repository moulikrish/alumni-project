package com.example.alumni_portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.alumni_portal.model.Mentor;

public interface MentorRepository extends JpaRepository<Mentor,Long>{

}