package com.restapirol.model;

import org.springframework.lang.Nullable;

import com.restapirol.model.adventurer.Adventurer;
import com.restapirol.model.campaign.Campaign;
import com.restapirol.model.monster.Monster;

import java.util.List;

import javax.validation.constraints.NotBlank;

public class Userr {
    private int id;
    @NotBlank(message = "Name is mandatory")
    private String name;
    private String password;
    @Nullable
    private List<Adventurer> adventurers;
    @Nullable
    private List<Campaign> campaigns;
    @Nullable
    private List<Monster> monsters;

    public Userr() {
    }

    public Userr(int id, String name, String password, List<Adventurer> adventurers, List<Campaign> campaigns,
            List<Monster> monsters) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.adventurers = adventurers;
        this.campaigns = campaigns;
        this.monsters = monsters;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Adventurer> getAdventurers() {
        return adventurers;
    }

    public void setAdventurers(List<Adventurer> adventurers) {
        this.adventurers = adventurers;
    }

    public List<Campaign> getCampaigns() {
        return campaigns;
    }

    public void setCampaigns(List<Campaign> campaigns) {
        this.campaigns = campaigns;
    }

    public List<Monster> getMonsters() {
        return monsters;
    }

    public void setMonsters(List<Monster> monsters) {
        this.monsters = monsters;
    }
    
}
