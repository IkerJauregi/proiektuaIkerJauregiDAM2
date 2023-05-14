package com.restapirol.controller.MinorControllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.restapirol.model.UserRepository;
import com.restapirol.model.Userr;
import com.restapirol.model.campaign.Campaign;
import com.restapirol.model.campaign.town.Town;

@RestController
@RequestMapping(path = "/town")
public class TownController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public TownController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        // Do some error handling here
        return "An error occurred: " + request.getAttribute("javax.servlet.error.message");
    }

    // Create a new town and add it to the campaign with the given ID
    @PostMapping(path = "/createTown/{userID}/{campaignID}")
    public ResponseEntity<Object> addNewTown(@PathVariable int userID, @PathVariable int campaignID,
            @RequestParam String townName, @RequestParam String townDescription) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, create a new town
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();
            // If the campaign exists, add the town to the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();
                // Generate a new unique town ID
                int townID = campaign.getTown().size() + 1;
                // Create the new town
                List<Town> townList = campaign.getTown();
                Town town = new Town();
                town.setId(townID);
                town.setName(townName);
                town.setDescription(townDescription);
                // Add the new town to the list
                townList.add(town);
                // Add the town to the campaign
                campaign.setTown(townList);
                // Save the campaign
                userRepository.saveTown(user);
                return ResponseEntity.ok(town);
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete the town with the given ID from the campaign with the given ID
    @DeleteMapping(path = "/deleteTown/{userID}/{campaignID}/{townID}")
    public ResponseEntity<Object> deleteTown(@PathVariable int userID, @PathVariable int campaignID,
            @PathVariable int townID) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, delete the town
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();
            // If the campaign exists, delete the town from the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();
                // Find the town with the given ID
                Optional<Town> townOptional = campaign.getTown().stream()
                        .filter(town -> town.getId() == townID)
                        .findFirst();
                // If the town exists, delete it
                if (townOptional.isPresent()) {
                    Town town = townOptional.get();
                    // Delete the town from the campaign
                    campaign.getTown().remove(town);
                    // Save the campaign
                    userRepository.saveTown(user);
                    return ResponseEntity.ok(town);
                } else {
                    return ResponseEntity.notFound().build();
                }
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Update the town with the given ID from the campaign with the given ID
    @PutMapping(path = "/updateTown/{userID}/{campaignID}/{townID}")
    public ResponseEntity<Object> updateTown(@PathVariable int userID, @PathVariable int campaignID,
            @PathVariable int townID, @RequestParam String townName, @RequestParam String townDescription) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, update the town
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();
            // If the campaign exists, update the town from the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();
                // Find the town with the given ID
                Optional<Town> townOptional = campaign.getTown().stream()
                        .filter(town -> town.getId() == townID)
                        .findFirst();
                // If the town exists, update it
                if (townOptional.isPresent()) {
                    Town town = townOptional.get();
                    // Update the town
                    town.setName(townName);
                    town.setDescription(townDescription);
                    // Save the campaign
                    userRepository.saveTown(user);
                    return ResponseEntity.ok(town);
                } else {
                    return ResponseEntity.notFound().build();
                }
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Get the town with the given ID from the campaign with the given ID
    @GetMapping(path = "/getTown/{userID}/{campaignID}")
    public ResponseEntity<Object> getTown(@PathVariable int userID, @PathVariable int campaignID) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, get the town
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();
            // If the campaign exists, get the town from the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();
                // Get the town
                List<Town> townList = campaign.getTown();
                return ResponseEntity.ok(townList);
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
