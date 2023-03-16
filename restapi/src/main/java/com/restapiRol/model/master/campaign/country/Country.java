package com.restapiRol.model.master.campaign.country;

import java.util.List;

import com.restapiRol.model.master.campaign.country.province.Province;

public class Country {
    private int id;
    private String name;
    private String description;
    private List<Province> province;

    public Country() {
    }

    public Country(int id, String name, String description, List<Province> province) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.province = province;
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

    public List<Province> getProvince() {
        return province;
    }

    public void setProvince(List<Province> province) {
        this.province = province;
    }

}
