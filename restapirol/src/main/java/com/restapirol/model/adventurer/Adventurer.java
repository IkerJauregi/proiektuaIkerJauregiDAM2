package com.restapirol.model.adventurer;

import java.util.List;

public class Adventurer {
    private int id;
    private String name;
    private String classAdventurer;
    private String raceAdventurer;
    private int level;
    private List<String> languages;
    private List<String> inventory;
    private Stats stats;
    private Money money;
    private Weapon weapon;

    public Adventurer() {
    }

    public Adventurer(int id, String name, String classAdventurer, String raceAdventurer, int level,
            List<String> languages, List<String> inventory, Stats stats,
            Money money, Weapon weapon) {
        this.id = id;
        this.name = name;
        this.classAdventurer = classAdventurer;
        this.raceAdventurer = raceAdventurer;
        this.level = level;
        this.languages = languages;
        this.inventory = inventory;
        this.stats = stats;
        this.money = money;
        this.weapon = weapon;
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

    public String getClassAdventurer() {
        return classAdventurer;
    }

    public void setClassAdventurer(String classAdventurer) {
        this.classAdventurer = classAdventurer;
    }

    public String getRaceAdventurer() {
        return raceAdventurer;
    }

    public void setRaceAdventurer(String raceAdventurer) {
        this.raceAdventurer = raceAdventurer;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public List<String> getLanguages() {
        return languages;
    }

    public void setLanguages(List<String> languages) {
        this.languages = languages;
    }

    public List<String> getInventory() {
        return inventory;
    }

    public void setInventory(List<String> inventory) {
        this.inventory = inventory;
    }

    public Stats getStats() {
        return stats;
    }

    public void setStats(Stats stats) {
        this.stats = stats;
    }

    public Money getMoney() {
        return money;
    }

    public void setMoney(Money money) {
        this.money = money;
    }

    public Weapon getWeapon() {
        return weapon;
    }

    public void setWeapon(Weapon weapon) {
        this.weapon = weapon;
    }

}