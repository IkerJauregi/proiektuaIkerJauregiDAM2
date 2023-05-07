package com.restapirol.model.campaign.item;

public class Curse {
    String curseName;
    String curseDescription;

    public Curse() {
    }

    public Curse(String curseName, String curseDescription) {
        this.curseName = curseName;
        this.curseDescription = curseDescription;
    }

    public String getCurseName() {
        return curseName;
    }

    public void setCurseName(String curseName) {
        this.curseName = curseName;
    }

    public String getCurseDescription() {
        return curseDescription;
    }

    public void setCurseDescription(String curseDescription) {
        this.curseDescription = curseDescription;
    }
    
}
