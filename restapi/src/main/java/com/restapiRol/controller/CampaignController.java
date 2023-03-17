package com.restapiRol.controller;

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

import com.restapiRol.model.master.Master;
import com.restapiRol.model.master.MasterRepository;
import com.restapiRol.model.master.campaign.Campaign;
import com.restapiRol.model.master.campaign.country.Country;
import com.restapiRol.model.master.campaign.item.Item;
import com.restapiRol.model.master.campaign.npc.Npc;
import com.restapiRol.model.master.campaign.quest.Quest;

@RestController
@RequestMapping(path = "/campaign")
public class CampaignController {
    @Autowired
    private MasterRepository masterRepository;
    // @Autowired
    // private CampaignRepository campaignRepository;

    @PostMapping(path = "/addCampaign/{masterId}")
    public ResponseEntity<Master> addCampaignToMaster(@PathVariable int masterId, @RequestParam String campaignName,
            @RequestParam String campaignDescription) {
        Optional<Master> masterOptional = masterRepository.findById(masterId);
        // If the selected master exists
        if (masterOptional.isPresent()) {
            Campaign campaign = new Campaign();
            campaign.setName(campaignName);
            campaign.setDescription(campaignDescription);
            campaign.setCountry(new ArrayList<Country>());
            campaign.setNpc(new ArrayList<Npc>());
            campaign.setItem(new ArrayList<Item>());
            campaign.setQuest(new ArrayList<Quest>());
            Master master = masterOptional.get();
            // We read all the campaign and we add new campaign to the arraylist
            List<Campaign> campaignList = master.getCampaign();
            // Count the number of campaigns in the list and add 1 to get the new ID
            int newCampaignId = campaignList.size() + 1;
            campaign.setId(newCampaignId);
            campaignList.add(campaign);
            master.setCampaign(campaignList);
            Master updatedMaster = masterRepository.saveCampaign(master);
            return ResponseEntity.ok(updatedMaster);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "{masterId}/deleteCampaign/{campaignId}")
    public ResponseEntity<Void> deleteCampaign(@PathVariable int masterId, @PathVariable int campaignId) {
       try {
            masterRepository.deleteCampaign(masterId, campaignId);
            return ResponseEntity.ok().build();
       } catch (Exception e) {
            System.out.println("Error");
            return ResponseEntity.notFound().build();
       }
    }

}
