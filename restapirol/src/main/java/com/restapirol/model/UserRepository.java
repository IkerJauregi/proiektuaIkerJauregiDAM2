package com.restapirol.model;

import java.util.Optional;

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
    // Item
    Userr saveItem(Userr userr);
    // NPC
    Userr saveNPC(Userr userr);
    // Town
    Userr saveTown(Userr user);
    // Quest
    Userr saveQuest(Userr user);
    // Adventurer
    Userr saveAdventurer(Userr user);
    // Monster
    Userr saveMonster(Userr user);
}
