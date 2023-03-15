package com.restapiRol.model.master.campaign;

import java.util.List;

import com.restapiRol.model.master.campaign.country.Country;
import com.restapiRol.model.master.campaign.item.Item;
import com.restapiRol.model.master.campaign.npc.Npc;
import com.restapiRol.model.master.campaign.quest.Quest;

public class Campaign {
    private String id;
    private String name;
    private String description;
    private List<Country> country;
    private List<Npc> npc;
    private List<Item> item;
    private List<Quest> quest;

    // Contructor
    public Campaign(String id, String name, String description, List<Country> country, List<Npc> npc, List<Item> item,
            List<Quest> quest) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.country = country;
        this.npc = npc;
        this.item = item;
        this.quest = quest;
    }

    // Contructor
    public Campaign() {
    }

    // getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Country> getCountry() {
        return country;
    }

    public void setCountry(List<Country> country) {
        this.country = country;
    }

    public List<Npc> getNpc() {
        return npc;
    }

    public void setNpc(List<Npc> npc) {
        this.npc = npc;
    }

    public List<Item> getItem() {
        return item;
    }

    public void setItem(List<Item> item) {
        this.item = item;
    }

    public List<Quest> getQuest() {
        return quest;
    }

    public void setQuest(List<Quest> quest) {
        this.quest = quest;
    }
}
