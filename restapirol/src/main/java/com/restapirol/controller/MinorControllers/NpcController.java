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
import com.restapirol.model.campaign.npc.Npc;

@RestController
@RequestMapping(path = "/npc")
public class NpcController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public NpcController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        // Do some error handling here
        return "An error occurred: " + request.getAttribute("javax.servlet.error.message");
    }

    // Create a new NPC and add it to the campaign with the given ID
    @PostMapping(path = "/createNpc/{userID}/{campaignID}")
    public ResponseEntity<Object> addNewNpc(@PathVariable int userID, @PathVariable int campaignID,
            @RequestParam String npcName, @RequestParam String npcDescription, @RequestParam List<String> npcTags,
            @RequestParam List<String> npcInventory) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, create a new NPC
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();
            // If the campaign exists, add the NPC to the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();
                // Generate a new unique NPC ID
                int npcID = campaign.getNpc().size() + 1;
                // Create the new NPC
                List<Npc> npcList = campaign.getNpc();
                Npc npc = new Npc();
                npc.setId(npcID);
                npc.setNpcName(npcName);
                npc.setNpcDescription(npcDescription);
                npc.setNpcTags(npcTags);
                npc.setNpcInventory(npcInventory);
                npcList.add(npc);
                // Add the NPC to the campaign
                campaign.setNpc(npcList);
                // Save the changes to the database
                userRepository.saveNPC(user);
                return ResponseEntity.ok(npc);
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    // Delete the NPC with the given ID from the campaign with the given ID
    @DeleteMapping(path = "/deleteNpc/{userID}/{campaignID}/{npcID}")
    public ResponseEntity<Object> deleteNpc(@PathVariable int userID, @PathVariable int campaignID,
            @RequestParam int npcID) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, delete the NPC
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();
            // If the campaign exists, delete the NPC from the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();
                // Find the NPC with the given ID
                Optional<Npc> npcOptional = campaign.getNpc().stream()
                        .filter(npc -> npc.getId() == npcID)
                        .findFirst();
                // If the NPC exists, delete it from the campaign
                if (npcOptional.isPresent()) {
                    Npc npc = npcOptional.get();
                    List<Npc> npcList = campaign.getNpc();
                    npcList.remove(npc);
                    campaign.setNpc(npcList);
                    // Save the changes to the database
                    userRepository.saveNPC(user);
                    return ResponseEntity.ok(npc);
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
    // Update the NPC with the given ID from the campaign with the given ID
    @PutMapping(path = "/updateNpc/{userID}/{campaignID}/{npcID}")
    public ResponseEntity<Object> updateNpc(@PathVariable int userID, @PathVariable int campaignID,
            @RequestParam int npcID, @RequestParam String npcName, @RequestParam String npcDescription,
            @RequestParam List<String> npcTags, @RequestParam List<String> npcInventory) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, update the NPC
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();
            // If the campaign exists, update the NPC from the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();
                // Find the NPC with the given ID
                Optional<Npc> npcOptional = campaign.getNpc().stream()
                        .filter(npc -> npc.getId() == npcID)
                        .findFirst();
                // If the NPC exists, update it from the campaign
                if (npcOptional.isPresent()) {
                    Npc npc = npcOptional.get();
                    List<Npc> npcList = campaign.getNpc();
                    npc.setNpcName(npcName);
                    npc.setNpcDescription(npcDescription);
                    npc.setNpcTags(npcTags);
                    npc.setNpcInventory(npcInventory);
                    npcList.add(npc);
                    campaign.setNpc(npcList);
                    // Save the changes to the database
                    userRepository.saveNPC(user);
                    return ResponseEntity.ok(npc);
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
    // Display all the NPCs from the campaign with the given ID
    @GetMapping(path = "/displayNpc/{userID}/{campaignID}")
    public ResponseEntity<Object> displayNpc(@PathVariable int userID, @PathVariable int campaignID) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, display the NPCs
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();
            // If the campaign exists, display the NPCs from the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();
                List<Npc> npcList = campaign.getNpc();
                return ResponseEntity.ok(npcList);
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
