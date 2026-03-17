package com.example.alumni_portal.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.alumni_portal.model.Student;
import com.example.alumni_portal.model.User;
import com.example.alumni_portal.repository.StudentRepository;
import com.example.alumni_portal.repository.UserRepository;
import com.example.alumni_portal.service.AuthService;
import com.example.alumni_portal.config.JwtUtil;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "https://alumni-project-zoa5.vercel.app")

public class AuthController {

    @Autowired
    private AuthService service;

    @Autowired
    private JwtUtil jwt;

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private StudentRepository studentRepository;
    

    @GetMapping("/test")
    public String test() {
        return "API Working";
    }
    
    @GetMapping("/alumni")
    public List<User> getAlumni(){
     return userRepository.findByRole("alumni");
    }
    
    @GetMapping("/alumni/{id}")
    public User getAlumniById(@PathVariable Long id){

        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Alumni not found"));

    }

    // REGISTER
    @PostMapping("/register")
    public User register(@RequestBody User user) {

        if(user.getRole().equalsIgnoreCase("alumni")){
            user.setApproved(false);
        }else{
            user.setApproved(true);
        }

        // Save user
        User savedUser = userRepository.save(user);

        // STUDENT SAVE
        if(user.getRole().equalsIgnoreCase("student")){

            Student student = new Student();

            student.setName(user.getName());
            student.setEmail(user.getEmail());
            student.setDepartment(user.getDepartment());

            studentRepository.save(student);
        }

        return savedUser;
    }
    
    // LOGIN
    @PostMapping("/login")
    public HashMap<String,String> login(@RequestBody User user){

        HashMap<String,String> response = new HashMap<>();

        User dbUser = service.login(user.getEmail(), user.getPassword());

        if(dbUser == null){
            response.put("error","Invalid Credentials");
            return response;
        }

        if(dbUser.getRole().equalsIgnoreCase("alumni") && !dbUser.isApproved()){
            response.put("error","Alumni not approved yet");
            return response;
        }

        String token = jwt.generateToken(dbUser.getEmail());

        response.put("token", token);
        response.put("role", dbUser.getRole());
        response.put("name", dbUser.getName());
        response.put("id", dbUser.getId().toString()); // ⭐ ADD THIS

        return response;
    }
    
    @PutMapping("/alumni/{id}")
    public User updateAlumni(@PathVariable Long id, @RequestBody User u) {

        User alumni = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Alumni not found"));

        alumni.setName(u.getName());
        alumni.setEmail(u.getEmail());
        alumni.setCompany(u.getCompany());
        alumni.setDepartment(u.getDepartment());
        alumni.setDesignation(u.getDesignation());
        alumni.setLocation(u.getLocation());

        return userRepository.save(alumni);
    }
}