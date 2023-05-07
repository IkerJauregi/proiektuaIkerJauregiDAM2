package com.restapirol.model.campaign.quest;

import java.util.List;

public class Quest {
    private int id;
    private String questName;
    private String questDescription;
    private List<String> questBounty;

    public Quest() {
    }

    public Quest(int id, String questName, String questDescription, List<String> questBounty) {
        this.id = id;
        this.questName = questName;
        this.questDescription = questDescription;
        this.questBounty = questBounty;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestName() {
        return questName;
    }

    public void setQuestName(String questName) {
        this.questName = questName;
    }

    public String getQuestDescription() {
        return questDescription;
    }

    public void setQuestDescription(String questDescription) {
        this.questDescription = questDescription;
    }

    public List<String> getQuestBounty() {
        return questBounty;
    }

    public void setQuestBounty(List<String> questBounty) {
        this.questBounty = questBounty;
    }
    
}
