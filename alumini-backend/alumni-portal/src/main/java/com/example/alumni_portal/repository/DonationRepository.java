package com.example.alumni_portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.alumni_portal.model.Donation;

public interface DonationRepository extends JpaRepository<Donation,Long>{

}
