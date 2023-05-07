package com.restapirol.model.monster;

import java.util.List;

import com.restapirol.model.adventurer.Stats;
import com.restapirol.model.adventurer.Weapon;

public class Monster {
    private int id;
    private String name;
    private String description;
    private String size;
    private String type;
    private String alignment;
    private int armorClass;
    private int hitPoints;
    private String speed;
    private Stats stats;
    private Weapon weapon;
    private List<String> languages;
    private int challengeRating;

    public Monster() {
    }

    public Monster(int id, String name, String description, String size, String type, String alignment, int armorClass,
            int hitPoints, String speed, Stats stats, Weapon weapon, List<String> languages, int challengeRating) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.size = size;
        this.type = type;
        this.alignment = alignment;
        this.armorClass = armorClass;
        this.hitPoints = hitPoints;
        this.speed = speed;
        this.stats = stats;
        this.weapon = weapon;
        this.languages = languages;
        this.challengeRating = challengeRating;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAlignment() {
        return alignment;
    }

    public void setAlignment(String alignment) {
        this.alignment = alignment;
    }

    public int getArmorClass() {
        return armorClass;
    }

    public void setArmorClass(int armorClass) {
        this.armorClass = armorClass;
    }

    public int getHitPoints() {
        return hitPoints;
    }

    public void setHitPoints(int hitPoints) {
        this.hitPoints = hitPoints;
    }

    public String getSpeed() {
        return speed;
    }

    public void setSpeed(String speed) {
        this.speed = speed;
    }

    public Stats getStats() {
        return stats;
    }

    public void setStats(Stats stats) {
        this.stats = stats;
    }

    public Weapon getWeapon() {
        return weapon;
    }

    public void setWeapon(Weapon weapon) {
        this.weapon = weapon;
    }

    public List<String> getLanguages() {
        return languages;
    }

    public void setLanguages(List<String> languages) {
        this.languages = languages;
    }

    public int getChallengeRating() {
        return challengeRating;
    }

    public void setChallengeRating(int challengeRating) {
        this.challengeRating = challengeRating;
    } 
    
}
