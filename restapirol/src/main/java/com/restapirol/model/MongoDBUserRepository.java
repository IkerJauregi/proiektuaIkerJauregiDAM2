package com.restapirol.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.bson.Document;
import org.bson.conversions.Bson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import static com.mongodb.client.model.Filters.eq;

import com.mongodb.ReadConcern;
import com.mongodb.ReadPreference;
import com.mongodb.TransactionOptions;
import com.mongodb.WriteConcern;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import com.restapirol.model.adventurer.Adventurer;
import com.restapirol.model.campaign.Campaign;
import com.restapirol.model.campaign.item.Item;
import com.restapirol.model.campaign.npc.Npc;
import com.restapirol.model.campaign.quest.Quest;
import com.restapirol.model.campaign.town.Town;
import com.restapirol.model.monster.Monster;

@Repository
public class MongoDBUserRepository implements UserRepository {
    private static final TransactionOptions txnOptions = TransactionOptions.builder()
            .readPreference(ReadPreference.primary())
            .readConcern(ReadConcern.MAJORITY)
            .writeConcern(WriteConcern.MAJORITY)
            .build();

    @Autowired
    private MongoClient client;
    private MongoCollection<Userr> userrCollection;

    @PostConstruct
    void init() {
        userrCollection = client.getDatabase("rotulaeDBR").getCollection("userr", Userr.class);
    }

    // "Read user in MongoDB by name"
    @Override
    public Userr findByName(String name) {
        return userrCollection.find(new org.bson.Document("name", name)).first();
    }

    // "Create user in MongoDB"
    @Override
    public Userr saveUser(Userr user) {
        long lastId = userrCollection.countDocuments() + 1;
        user.setId((int) lastId);
        user.setAdventurers(new ArrayList<Adventurer>());
        user.setCampaigns(new ArrayList<Campaign>());
        user.setMonsters(new ArrayList<Monster>());
        userrCollection.insertOne(user);
        return user;
    }

    @Override
    public Optional<Userr> findById(int userID) {
        Userr user = userrCollection.find(eq("_id", userID)).first();
        return Optional.ofNullable(user);
    }

    @Override
    public long deleteUser(int userID) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }
    //
    // Campaigns
    //

    // "Create campaign in MongoDB"
    @Override
    public Userr saveCampaign(Userr userr) {
        userrCollection.updateOne(eq("_id", userr.getId()),
                new Document("$set", new Document("campaigns", userr.getCampaigns())));
        return userr;
    }

    // "Delete campaign in MongoDB by id"
    @Override
    public long deleteCampaignById(int userID, int campaignID) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteCampaignById'");
    }

    //
    // Adventurers
    //

    // Create Adventurers
    @Override
    public Userr saveAdventurer(Userr userr) {
        userrCollection.updateOne(eq("_id", userr.getId()),
                new Document("$set", new Document("adventurers", userr.getAdventurers())));
        return userr;
    }
    //
    // Monsters
    //

    // Create Monsters
    @Override
    public Userr saveMonster(Userr userr) {
        userrCollection.updateOne(eq("_id", userr.getId()),
                new Document("$set", new Document("monsters", userr.getMonsters())));
        return userr;
    }

    @Override
    public Userr saveItem(Userr userr) {
        // Remove the "item " field from each campaign in the user's list of campaigns
        userr.getCampaigns().forEach(campaign -> {
            // Create a filter to identify the campaign in the collection
            Bson filter = Filters.eq("_id", campaign.getId());
            // Create an update to remove the "item" field from the campaign
            Bson update = Updates.unset("item");
            // Execute the update in the campaigns collection
            userrCollection.updateOne(filter, update);
        });
        // Update the user in the users collection
        Bson userFilter = Filters.eq("_id", userr.getId());
        Bson userUpdate = new Document("$set", userr);
        userrCollection.updateOne(userFilter, userUpdate);

        return userr;
    }

    @Override
    public Userr saveNPC(Userr userr) {
        // Remove the "npc" field from each campaign in the user's list of campaigns
        userr.getCampaigns().forEach(campaign -> {
            // Create a filter to identify the campaign in the collection
            Bson filter = Filters.eq("_id", campaign.getId());
            // Create an update to remove the "npc" field from the campaign
            Bson update = Updates.unset("npc");
            // Execute the update in the campaigns collection
            userrCollection.updateOne(filter, update);
        });

        // Update the user in the users collection
        Bson userFilter = Filters.eq("_id", userr.getId());
        Bson userUpdate = new Document("$set", userr);
        userrCollection.updateOne(userFilter, userUpdate);

        return userr;
    }

    @Override
    public Userr saveTown(Userr userr) {
        // Remove the "town" field from each campaign in the user's list of campaigns
        userr.getCampaigns().forEach(campaign -> {
            // Create a filter to identify the campaign in the collection
            Bson filter = Filters.eq("_id", campaign.getId());
            // Create an update to remove the "town" field from the campaign
            Bson update = Updates.unset("town");
            // Execute the update in the campaigns collection
            userrCollection.updateOne(filter, update);
        });

        // Update the user in the users collection
        Bson userFilter = Filters.eq("_id", userr.getId());
        Bson userUpdate = new Document("$set", userr);
        userrCollection.updateOne(userFilter, userUpdate);

        return userr;
    }

    @Override
    public Userr saveQuest(Userr userr) {
        // Remove the "quest" field from each campaign in the user's list of campaigns
        userr.getCampaigns().forEach(campaign -> {
            // Create a filter to identify the campaign in the collection
            Bson filter = Filters.eq("_id", campaign.getId());
            // Create an update to remove the "quest" field from the campaign
            Bson update = Updates.unset("quest");
            // Execute the update in the campaigns collection
            userrCollection.updateOne(filter, update);
        });

        // Update the user in the users collection
        Bson userFilter = Filters.eq("_id", userr.getId());
        Bson userUpdate = new Document("$set", userr);
        userrCollection.updateOne(userFilter, userUpdate);

        return userr;
    }
}
