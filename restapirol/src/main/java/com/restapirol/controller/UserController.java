package com.restapirol.controller;

import java.util.ArrayList;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
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
        String hashedPassword = passwordEncoder.encode(password);
        user.setPassword(hashedPassword);
        user.setAdventurer(new ArrayList<Adventurer>());
        user.setCampaign(new ArrayList<Campaign>());
        userRepository.saveUser(user);
        return "Saved";
    }

    // @PostMapping(path = "/login")
    // public ResponseEntity<Userr> login(@RequestParam String name, @RequestParam
    // String password) {
    // Userr user = userRepository.findByName(name);
    // if (user != null) {
    // if (passwordEncoder.matches(password, user.getPassword())) {
    // return ResponseEntity.ok(user);
    // }
    // }
    // return ResponseEntity.notFound().build();
    // }

    // We receive a user object with name and password and if the user exists and
    // the password is correct we return the user
    @PostMapping(path = "/login")
    public ResponseEntity<Userr> login(@RequestBody Userr user) {
        Userr dbUser = userRepository.findByName(user.getName());
        if (dbUser != null) {
            if (passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {
                return ResponseEntity.ok(dbUser);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping(path = "/showMasterCampaigns/{userID}")
    public ResponseEntity<Userr> showMasterCampaigns(@PathVariable int userID) {
        Optional<Userr> optionalUser = userRepository.findById(userID);
        if (optionalUser.isPresent()) {
            Userr user = optionalUser.get();
            return ResponseEntity.ok().body(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
