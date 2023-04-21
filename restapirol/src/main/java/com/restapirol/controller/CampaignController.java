package com.restapirol.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.restapirol.model.UserRepository;
import com.restapirol.model.Userr;
import com.restapirol.model.campaign.Campaign;
import com.restapirol.model.campaign.item.Item;
import com.restapirol.model.campaign.npc.Npc;
import com.restapirol.model.campaign.quest.Quest;
import com.restapirol.model.campaign.town.Town;

@RestController
@RequestMapping(path = "/campaigns")
public class CampaignController {
    @Autowired
    private UserRepository userRepository;


    // Create a new campaign
    @PostMapping(path = "/createCampaign/{userID}")
    public ResponseEntity<Userr> addCampaignToUser(@PathVariable int userID, @RequestParam String campaignName,
            @RequestParam String campaignDescription) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        if (userOptional.isPresent()) {
            Campaign campaign = new Campaign();
            campaign.setName(campaignName);
            campaign.setDescription(campaignDescription);
            campaign.setTown(new ArrayList<Town>());
            campaign.setNpc(new ArrayList<Npc>());
            campaign.setItem(new ArrayList<Item>());
            campaign.setQuest(new ArrayList<Quest>());
            Userr user = userOptional.get();
            // We add the campaign to the user
            List<Campaign> campaignList = user.getCampaign();
            // Count the number of campaigns
            int newCampaignId = campaignList.size() + 1;
            campaign.setId(newCampaignId);
            campaignList.add(campaign);
            user.setCampaign(campaignList);
            Userr updatedUser = userRepository.saveCampaign(user);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
