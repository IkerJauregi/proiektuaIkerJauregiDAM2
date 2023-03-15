package com.restapiRol.model.master;

import java.util.List;

import javax.validation.constraints.NotBlank;

import org.springframework.lang.Nullable;

import com.restapiRol.model.master.campaign.Campaign;
import com.restapiRol.model.master.campaign.item.Item;
import com.restapiRol.model.master.campaign.monster.Monster;
import com.restapiRol.model.master.campaign.npc.Npc;
import com.restapiRol.model.master.campaign.quest.Quest;

public class Master {
    private int id;
    @NotBlank(message = "Name is mandatory")
    private String name;
    @Nullable
    private List<Campaign> campaign;
    @Nullable
    private List<Monster> monster;

    public Master() {
    }

    public Master(int id, @NotBlank(message = "Name is mandatory") String name, List<Campaign> campaign,
            List<Monster> monster) {
        this.id = id;
        this.name = name;
        this.campaign = campaign;
        this.monster = monster;
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

    public List<Campaign> getCampaign() {
        return campaign;
    }

    public void setCampaign(List<Campaign> campaign) {
        this.campaign = campaign;
    }

    public List<Monster> getMonster() {
        return monster;
    }

    public void setMonster(List<Monster> monster) {
        this.monster = monster;
    }

}
