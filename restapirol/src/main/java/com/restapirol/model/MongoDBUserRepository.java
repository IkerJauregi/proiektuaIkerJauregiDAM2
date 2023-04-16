package com.restapirol.model;

import java.util.ArrayList;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import static com.mongodb.client.model.Filters.eq;

import com.mongodb.ReadConcern;
import com.mongodb.ReadPreference;
import com.mongodb.TransactionOptions;
import com.mongodb.WriteConcern;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.restapirol.model.adventurer.Adventurer;
import com.restapirol.model.campaign.Campaign;

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
        user.setAdventurer(new ArrayList<Adventurer>());
        user.setCampaign(new ArrayList<Campaign>());
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

    @Override
    public Userr saveCampaign(Userr userr) {
        userrCollection.updateOne(eq("_id", userr.getId()),
                new Document("$set", new Document("campaign", userr.getCampaign())));
        return userr;
    }

    @Override
    public long deleteCampaignById(int userID, int campaignID) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteCampaignById'");
    }
}
