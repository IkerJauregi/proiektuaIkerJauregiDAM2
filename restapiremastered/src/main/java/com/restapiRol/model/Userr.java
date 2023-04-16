package com.restapiRol.model;

import org.springframework.data.annotation.Id;
import org.springframework.lang.Nullable;

import java.util.List;

public class Userr {
    @Id
    private int id;
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
}
