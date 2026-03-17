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

import com.example.alumni_portal.model.Donation;
import com.example.alumni_portal.repository.DonationRepository;

@RestController
@RequestMapping("/api/donations")
@CrossOrigin(origins = "http://localhost:5173")

public class DonationController {

    @Autowired
    DonationRepository repo;

    @GetMapping
    public List<Donation> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Donation donate(@RequestBody Donation donation) {
        return repo.save(donation);
    }

    @PutMapping("/{id}")
    public Donation update(@PathVariable Long id, @RequestBody Donation donation) {

        Donation d = repo.findById(id).get();

        d.setAlumniName(donation.getAlumniName());
        d.setAmount(donation.getAmount());
        d.setMessage(donation.getMessage());

        return repo.save(d);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }

}