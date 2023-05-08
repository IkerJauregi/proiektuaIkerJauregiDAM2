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
import com.restapirol.model.campaign.quest.Quest;

@RestController
@RequestMapping(path = "/quest")
public class QuestController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public QuestController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        // Do some error handling here
        return "An error occurred: " + request.getAttribute("javax.servlet.error.message");
    }

    // Create a new quest and add it to the campaign with the given ID
    @PostMapping(path = "/createQuest/{userID}/{campaignID}")
    public ResponseEntity<Object> addNewQuest(@PathVariable int userID, @PathVariable int campaignID,
            @RequestParam String questName, @RequestParam String questDescription,
            @RequestParam List<String> questBounty) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, create a new quest
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();
            // If the campaign exists, add the quest to the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();
                // Generate a new unique quest ID
                int questID = campaign.getQuest().size() + 1;
                // Create the new quest
                List<Quest> questList = campaign.getQuest();
                Quest quest = new Quest();
                quest.setId(questID);
                quest.setQuestName(questName);
                quest.setQuestDescription(questDescription);
                quest.setQuestBounty(questBounty);
                questList.add(quest);
                campaign.setQuest(questList);
                // Save the campaign
                userRepository.saveQuest(user);
                return ResponseEntity.ok(quest);
            }
            // If the campaign doesn't exist, return a 404
            else {
                return ResponseEntity.notFound().build();
            }
        } else {
            // If the user doesn't exist, return a 404
            return ResponseEntity.notFound().build();
        }
    }

    // Delete the quest with the given ID from the campaign with the given ID
    @DeleteMapping(path = "/deleteQuest/{userID}/{campaignID}/{questID}")
    public ResponseEntity<Object> deleteQuest(@PathVariable int userID, @PathVariable int campaignID,
            @PathVariable int questID) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, delete the quest
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();
            // If the campaign exists, delete the quest from the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();
                // Find the quest with the given ID
                Optional<Quest> questOptional = campaign.getQuest().stream()
                        .filter(quest -> quest.getId() == questID)
                        .findFirst();
                // If the quest exists, delete it
                if (questOptional.isPresent()) {
                    Quest quest = questOptional.get();
                    List<Quest> questList = campaign.getQuest();
                    questList.remove(quest);
                    campaign.setQuest(questList);
                    // Save the campaign
                    userRepository.saveQuest(user);
                    return ResponseEntity.ok(quest);
                }
                // If the quest doesn't exist, return a 404
                else {
                    return ResponseEntity.notFound().build();
                }
            }
            // If the campaign doesn't exist, return a 404
            else {
                return ResponseEntity.notFound().build();
            }
        }
        // If the user doesn't exist, return a 404
        else {
            return ResponseEntity.notFound().build();
        }
    }

    // Update the quest with the given ID from the campaign with the given ID
    @PutMapping(path = "/updateQuest/{userID}/{campaignID}/{questID}")
    public ResponseEntity<Object> updateQuest(@PathVariable int userID, @PathVariable int campaignID,
            @PathVariable int questID, @RequestParam String questName, @RequestParam String questDescription,
            @RequestParam List<String> questBounty) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, update the quest
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();
            // If the campaign exists, update the quest from the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();
                // Find the quest with the given ID
                Optional<Quest> questOptional = campaign.getQuest().stream()
                        .filter(quest -> quest.getId() == questID)
                        .findFirst();
                // If the quest exists, update it
                if (questOptional.isPresent()) {
                    Quest quest = questOptional.get();
                    List<Quest> questList = campaign.getQuest();
                    quest.setQuestName(questName);
                    quest.setQuestDescription(questDescription);
                    quest.setQuestBounty(questBounty);
                    questList.add(quest);
                    campaign.setQuest(questList);
                    // Save the campaign
                    userRepository.saveQuest(user);
                    return ResponseEntity.ok(quest);
                }
                // If the quest doesn't exist, return a 404
                else {
                    return ResponseEntity.notFound().build();
                }
            }
            // If the campaign doesn't exist, return a 404
            else {
                return ResponseEntity.notFound().build();
            }
        }
        // If the user doesn't exist, return a 404
        else {
            return ResponseEntity.notFound().build();
        }
    }

    // Get the quest with the given ID from the campaign with the given ID
    @GetMapping(path = "/getQuest/{userID}/{campaignID}")
    public ResponseEntity<Object> getQuest(@PathVariable int userID, @PathVariable int campaignID) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, get the quest
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();
            // If the campaign exists, get the quest from the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();
                // Get the Quest
                List<Quest> questList = campaign.getQuest();
                return ResponseEntity.ok(questList);
                // If the quest doesn't exist, return a 404
            } else {
                return ResponseEntity.notFound().build();
            }
        }
        // If the campaign doesn't exist, return a 404
        else {
            return ResponseEntity.notFound().build();
        }
    }
}