package com.restapiRol.model.master.campaign.quest;

public class Quest {
    private int id;
    private String questName;
    private String questDescription;
    private String questBounty;
    public Quest() {
    }
    public Quest(int id, String questName, String questDescription, String questBounty) {
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
    public String getQuestBounty() {
        return questBounty;
    }
    public void setQuestBounty(String questBounty) {
        this.questBounty = questBounty;
    }

    
}
