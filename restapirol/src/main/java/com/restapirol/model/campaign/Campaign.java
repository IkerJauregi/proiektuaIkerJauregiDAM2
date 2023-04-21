package com.restapirol.model.campaign;

import java.util.List;

import com.restapirol.model.campaign.item.Item;
import com.restapirol.model.campaign.npc.Npc;
import com.restapirol.model.campaign.quest.Quest;
import com.restapirol.model.campaign.town.Town;

public class Campaign {
    private int id;
    private String name;
    private String description;
    private List<Town> town;
    private List<Npc> npc;
    private List<Item> item;
    private List<Quest> quest;

    // Contructor
    public Campaign(int id, String name, String description, List<Town> town, List<Npc> npc, List<Item> item,
            List<Quest> quest) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.town = town;
        this.npc = npc;
        this.item = item;
        this.quest = quest;
    }

    // Contructor
    public Campaign() {
    }

    // getters and setters
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Town> getTown() {
        return town;
    }

    public void setTown(List<Town> town) {
        this.town = town;
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
