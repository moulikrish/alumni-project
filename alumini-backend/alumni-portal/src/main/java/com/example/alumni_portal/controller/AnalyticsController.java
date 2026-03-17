package com.example.alumni_portal.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.alumni_portal.repository.UserRepository;
import com.example.alumni_portal.repository.EventRepository;

import java.util.HashMap;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "https://alumni-project-zoa5.vercel.app")

public class AnalyticsController {

    @Autowired
    UserRepository userRepo;

    @Autowired
    EventRepository eventRepo;

    @GetMapping("/analytics")
    public HashMap<String, Long> analytics(){

        HashMap<String, Long> data = new HashMap<>();

        data.put("totalUsers", userRepo.count());
        data.put("totalStudents", userRepo.countByRole("student"));
        data.put("totalAlumni", userRepo.countByRole("alumni"));
        data.put("totalStaff", userRepo.countByRole("staff"));
        data.put("totalEvents", eventRepo.count());

        return data;
    }
}