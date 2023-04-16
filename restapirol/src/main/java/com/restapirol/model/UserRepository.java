package com.restapirol.model;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository {
    Userr findByName(String name);
    Optional<Userr> findById(int userID);
    Userr saveUser(Userr userr);
    long deleteUser(int userID);
    // Campaign
    Userr saveCampaign(Userr userr);
    long deleteCampaignById(int userID, int campaignID);
}
