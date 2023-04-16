package com.restapirol.model.adventurer;

import java.util.List;

public class Adventurer {
    private int id;
    private String name;
    private String classAdventurer;
    private String raceAdventurer;
    private List<AttributesAdventurer> attributes;
    private List<SkillsAdventurer> skills;

    public Adventurer() {
    }

    public Adventurer(int id, String name, String classAdventurer, String raceAdventurer,
            List<AttributesAdventurer> attributes, List<SkillsAdventurer> skills) {
        this.id = id;
        this.name = name;
        this.classAdventurer = classAdventurer;
        this.raceAdventurer = raceAdventurer;
        this.attributes = attributes;
        this.skills = skills;
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

    public List<AttributesAdventurer> getAttributes() {
        return attributes;
    }

    public void setAttributes(List<AttributesAdventurer> attributes) {
        this.attributes = attributes;
    }

    public List<SkillsAdventurer> getSkills() {
        return skills;
    }

    public void setSkills(List<SkillsAdventurer> skills) {
        this.skills = skills;
    }

}
