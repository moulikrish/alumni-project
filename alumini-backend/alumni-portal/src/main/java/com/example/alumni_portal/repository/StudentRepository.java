package com.example.alumni_portal.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.alumni_portal.model.Student;

public interface StudentRepository extends JpaRepository<Student,Long>{

}