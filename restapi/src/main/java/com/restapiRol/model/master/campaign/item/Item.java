package com.restapiRol.model.master.campaign.item;

public class Item {
    private int id;
    private String itemName;
    private String itemDescription;
    private String itemClass;
    private String itemStats;
    private String itemOwner;
    private String itemPlace;
    private boolean itemCurse;

    public Item() {
    }

    public Item(int id, String itemName, String itemDescription, String itemClass, String itemStats, String itemOwner,
            String itemPlace, boolean itemCurse) {
        this.id = id;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemClass = itemClass;
        this.itemStats = itemStats;
        this.itemOwner = itemOwner;
        this.itemPlace = itemPlace;
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

    public String getItemOwner() {
        return itemOwner;
    }

    public void setItemOwner(String itemOwner) {
        this.itemOwner = itemOwner;
    }

    public String getItemPlace() {
        return itemPlace;
    }

    public void setItemPlace(String itemPlace) {
        this.itemPlace = itemPlace;
    }

    public boolean isItemCurse() {
        return itemCurse;
    }

    public void setItemCurse(boolean itemCurse) {
        this.itemCurse = itemCurse;
    }

}
