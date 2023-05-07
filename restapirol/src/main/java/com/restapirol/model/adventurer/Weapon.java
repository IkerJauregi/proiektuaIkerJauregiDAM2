package com.restapirol.model.adventurer;

public class Weapon {
    private String name;
    private String type;
    private String damage;
    private String damageType;
    private String properties;

    public Weapon() {
    }

    public Weapon(String name, String type, String damage, String damageType, String properties) {
        this.name = name;
        this.type = type;
        this.damage = damage;
        this.damageType = damageType;
        this.properties = properties;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDamage() {
        return damage;
    }

    public void setDamage(String damage) {
        this.damage = damage;
    }

    public String getDamageType() {
        return damageType;
    }

    public void setDamageType(String damageType) {
        this.damageType = damageType;
    }

    public String getProperties() {
        return properties;
    }

    public void setProperties(String properties) {
        this.properties = properties;
    }

}