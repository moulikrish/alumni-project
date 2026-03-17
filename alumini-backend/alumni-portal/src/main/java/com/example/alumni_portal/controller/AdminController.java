package com.example.alumni_portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.alumni_portal.model.User;
import com.example.alumni_portal.model.Donation;
import com.example.alumni_portal.model.Event;
import com.example.alumni_portal.service.UserService;
import com.example.alumni_portal.repository.DonationRepository;
import com.example.alumni_portal.repository.EventRepository;
import com.example.alumni_portal.repository.UserRepository;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "https://alumni-project-zoa5.vercel.app")

public class AdminController {

    @Autowired
    private UserService userService;

    @Autowired
    private EventRepository eventRepo;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DonationRepository donationRepository;

    // =========================
    // USERS MANAGEMENT
    // =========================

    // GET ALL USERS
    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/donations")
    public List<Donation> getDonations() {

        return donationRepository.findAll();

    }

    // DELETE USER
    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return "User Deleted Successfully";
    }

    // APPROVE ALUMNI
    @PutMapping("/approve/{id}")
    public User approveAlumni(@PathVariable Long id) {
        return userService.approveAlumni(id);
    }

    // =========================
    // EVENTS MANAGEMENT
    // =========================

    // CREATE EVENT
    @PostMapping("/events")
    public Event createEvent(@RequestBody Event event) {
        return eventRepo.save(event);
    }

    // GET ALL EVENTS
    @GetMapping("/events")
    public List<Event> getEvents() {
        return eventRepo.findAll();
    }

    // UPDATE EVENT
    @PutMapping("/events/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {

        Event event = eventRepo.findById(id).orElse(null);

        if (event != null) {
            event.setTitle(eventDetails.getTitle());
            event.setDate(eventDetails.getDate());
            event.setTime(eventDetails.getTime());
            event.setVenue(eventDetails.getVenue());

            return eventRepo.save(event);
        }

        return null;
    }

    // DELETE EVENT
    @DeleteMapping("/events/{id}")
    public String deleteEvent(@PathVariable Long id) {

        eventRepo.deleteById(id);

        return "Event Deleted Successfully";
    }

}