package com.restapirol.controller;

import java.util.ArrayList;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.restapirol.model.UserRepository;
import com.restapirol.model.Userr;
import com.restapirol.model.adventurer.Adventurer;
import com.restapirol.model.campaign.Campaign;

@RestController
@RequestMapping(path = "/user")
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
        user.setAdventurer(new ArrayList<Adventurer>());
        user.setCampaign(new ArrayList<Campaign>());
        userRepository.saveUser(user);
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
    @GetMapping(path = "/ShowMasterCampaigns/{userID}")
    public ResponseEntity<Userr> showMasterCampaigns(@RequestParam int userID) {
        Optional<Userr> optionalUser = userRepository.findById(userID);
        if (optionalUser.isPresent()) {
            Userr user = optionalUser.get();
            return ResponseEntity.ok().body(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
