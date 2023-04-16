package com.restapirol.model;

import org.springframework.lang.Nullable;

import com.restapirol.model.adventurer.Adventurer;
import com.restapirol.model.campaign.Campaign;

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

    public Userr() {
    }

    public Userr(int id, String name, String password, List<Adventurer> adventurers, List<Campaign> campaigns) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.adventurers = adventurers;
        this.campaigns = campaigns;
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

    public List<Adventurer> getAdventurer() {
        return adventurers;
    }

    public void setAdventurer(List<Adventurer> adventurers) {
        this.adventurers = adventurers;
    }

    public List<Campaign> getCampaign() {
        return campaigns;
    }

    public void setCampaign(List<Campaign> campaigns) {
        this.campaigns = campaigns;
    }
}
