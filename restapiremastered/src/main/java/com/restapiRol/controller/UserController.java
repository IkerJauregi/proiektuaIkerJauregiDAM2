package com.restapiRol.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.restapiRol.model.Adventurer;
import com.restapiRol.model.Campaign;
import com.restapiRol.model.UserRepository;
import com.restapiRol.model.Userr;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    // private final PasswordEncoder passwordEncoder;
    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        // Do some error handling here
        return "An error occurred: " + request.getAttribute("javax.servlet.error.message");
    }
    @PostMapping(path = "/register")
    public @ResponseBody String addNewUser(@RequestParam String name, @RequestParam String password) {
        Userr user = new Userr();
        user.setName(name);
        user.setPassword(password);
        user.setAdventurers(new ArrayList<Adventurer>());
        user.setCampaigns(new ArrayList<Campaign>());
        userRepository.saveUserr(user);
        return "Saved";
    }

    @PostMapping(path = "/login")
    public ResponseEntity<Userr> login(@RequestParam String name, @RequestParam String password) {
        Userr user = userRepository.findByName(name);
        if (user != null && user.getPassword().equals(password)) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
