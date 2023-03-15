package com.restapiRol.model.master.campaign.monster;

import javax.validation.constraints.NotBlank;

public class Monster {
    private int id;
    @NotBlank(message = "Name is mandatory")
    private String name;

    public Monster() {
    }

    public Monster(int id, @NotBlank(message = "Name is mandatory") String name) {
        this.id = id;
        this.name = name;
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

}
