package com.restapirol.model.campaign.npc;

import java.util.List;

public class Npc {
    private int id;
    private String npcName;
    private String npcDescription;
    private List<String> npcTags;
    private String npcImage;

    public Npc() {
    }

    public Npc(int id, String npcName, String npcDescription, List<String> npcTags, String npcImage) {
        this.id = id;
        this.npcName = npcName;
        this.npcDescription = npcDescription;
        this.npcTags = npcTags;
        this.npcImage = npcImage;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNpcName() {
        return npcName;
    }

    public void setNpcName(String npcName) {
        this.npcName = npcName;
    }

    public String getNpcDescription() {
        return npcDescription;
    }

    public void setNpcDescription(String npcDescription) {
        this.npcDescription = npcDescription;
    }

    public List<String> getNpcTags() {
        return npcTags;
    }

    public void setNpcTags(List<String> npcTags) {
        this.npcTags = npcTags;
    }

    public String getNpcImage() {
        return npcImage;
    }

    public void setNpcImage(String npcImage) {
        this.npcImage = npcImage;
    }
    
}
