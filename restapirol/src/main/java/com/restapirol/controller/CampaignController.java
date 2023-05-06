package com.restapirol.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
            List<Campaign> campaignList = user.getCampaigns();
            // Count the number of campaigns
            int newCampaignId = campaignList.size() + 1;
            campaign.setId(newCampaignId);
            campaignList.add(campaign);
            user.setCampaigns(campaignList);
            Userr updatedUser = userRepository.saveCampaign(user);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    //Delete a campaign
    @DeleteMapping(path = "/deleteCampaign/{userID}/{campaignID}")
    public ResponseEntity<Userr> deleteCampaign(@PathVariable int userID, @PathVariable int campaignID) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            List<Campaign> campaignList = user.getCampaigns();
            for (int i = 0; i < campaignList.size(); i++) {
                if (campaignList.get(i).getId() == campaignID) {
                    campaignList.remove(i);
                    break;
                }
            }
            user.setCampaigns(campaignList);
            Userr updatedUser = userRepository.saveCampaign(user);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    // Edit a campaign
    //TODO prueba a cambiar el pathvariable por el requestparams en el id de la campaña
    @PostMapping(path = "/editCampaign/{userID}/{campaignID}")
    public ResponseEntity<Userr> editCampaign(@PathVariable int userID, @PathVariable int campaignID,
            @RequestParam String campaignName, @RequestParam String campaignDescription) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            List<Campaign> campaignList = user.getCampaigns();
            for (int i = 0; i < campaignList.size(); i++) {
                if (campaignList.get(i).getId() == campaignID) {
                    Campaign campaign = campaignList.get(i);
                    campaign.setName(campaignName);
                    campaign.setDescription(campaignDescription);
                    campaignList.set(i, campaign);
                    break;
                }
            }
            user.setCampaigns(campaignList);
            Userr updatedUser = userRepository.saveCampaign(user);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
