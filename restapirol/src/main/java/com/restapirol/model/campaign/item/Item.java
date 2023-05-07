package com.restapirol.model.campaign.item;

public class Item {
    private int id;
    private String itemName;
    private String itemDescription;
    private String itemClass;
    private String itemStats;
    private Curse itemCurse;

    public Item() {
    }

    public Item(int id, String itemName, String itemDescription, String itemClass, String itemStats, Curse itemCurse) {
        this.id = id;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemClass = itemClass;
        this.itemStats = itemStats;
        this.itemCurse = itemCurse;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    public String getItemClass() {
        return itemClass;
    }

    public void setItemClass(String itemClass) {
        this.itemClass = itemClass;
    }

    public String getItemStats() {
        return itemStats;
    }

    public void setItemStats(String itemStats) {
        this.itemStats = itemStats;
    }

    public Curse getItemCurse() {
        return itemCurse;
    }

    public void setItemCurse(Curse itemCurse) {
        this.itemCurse = itemCurse;
    }

}
