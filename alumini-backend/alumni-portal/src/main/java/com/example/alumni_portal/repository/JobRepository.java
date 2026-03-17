package com.example.alumni_portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.alumni_portal.model.Job;

public interface JobRepository extends JpaRepository<Job,Long>{

}
