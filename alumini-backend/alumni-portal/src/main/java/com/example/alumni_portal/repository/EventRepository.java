package com.example.alumni_portal.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.example.alumni_portal.model.Event;

public interface EventRepository extends JpaRepository<Event,Long>{

}