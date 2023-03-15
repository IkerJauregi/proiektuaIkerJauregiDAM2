package com.restapiRol.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.restapiRol.model.master.*;
import com.restapiRol.model.master.MasterRepository;
import com.restapiRol.model.master.campaign.Campaign;
import com.restapiRol.model.master.campaign.monster.Monster;

@RestController
@RequestMapping(path = "/master")
public class MasterController {
    @Autowired
    private MasterRepository masterRepository;

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        // Do some error handling here
        return "An error occurred: " + request.getAttribute("javax.servlet.error.message");
    }
    // 
    // Master controller
    // 
    @GetMapping(path = "/allMaster")
    public @ResponseBody Iterable<Master> getAllMaster() {
        return masterRepository.findAllMasters();
    }
    
    @GetMapping(path = "/findMaster/{masterId}")
    public ResponseEntity<Master> findMasterById(@PathVariable int masterId) {
        Optional<Master> optionalMaster = masterRepository.findById(masterId);
        if (optionalMaster.isPresent()) {
            Master master = optionalMaster.get();
            return ResponseEntity.ok().body(master);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping(path = "/addMaster")
    public @ResponseBody String addNewMaster(@RequestParam String name) {
        Master master = new Master();
        master.setName(name);
        master.setCampaign(new ArrayList<Campaign>());
        master.setMonster(new ArrayList<Monster>());
        masterRepository.saveMaster(master);
        return "Saved";
    }
    @DeleteMapping(path = "/deleteMaster/{name}")
    public ResponseEntity<Void> deleteMaster(@PathVariable String name){
        try {
            masterRepository.deleteMaster(name);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            System.out.println("Error");
            return ResponseEntity.notFound().build();
        }
    }
    // 
    // Campaings controller
    // 
    @PostMapping(path = "/addCampaign/{masterId}")
public ResponseEntity<Master> addCampaignToMaster(@PathVariable int masterId, @RequestBody Campaign campaign) {
    Optional<Master> masterOptional = masterRepository.findById(masterId);

    if (masterOptional.isPresent()) {
        Master master = masterOptional.get();
        List<Campaign> campaignList = master.getCampaign();
        campaignList.add(campaign);
        master.setCampaign(campaignList);
        Master updatedMaster = masterRepository.saveCampaign(master);
        return ResponseEntity.ok(updatedMaster);
    } else {
        return ResponseEntity.notFound().build();
    }
}

}