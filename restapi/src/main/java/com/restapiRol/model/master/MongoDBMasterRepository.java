package com.restapiRol.model.master;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.mongodb.client.model.Filters;
import com.mongodb.ReadConcern;
import com.mongodb.ReadPreference;
import com.mongodb.TransactionOptions;
import com.mongodb.WriteConcern;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Updates;
import com.restapiRol.model.master.campaign.Campaign;
import com.restapiRol.model.master.campaign.monster.Monster;

import static com.mongodb.client.model.Filters.eq;

@Repository
public class MongoDBMasterRepository implements MasterRepository {
    private static final TransactionOptions txnOptions = TransactionOptions.builder()
            .readPreference(ReadPreference.primary())
            .readConcern(ReadConcern.MAJORITY)
            .writeConcern(WriteConcern.MAJORITY)
            .build();

    @Autowired
    private MongoClient client;
    private MongoCollection<Master> masterCollection;

    @PostConstruct
    void init() {
        masterCollection = client.getDatabase("rotulaeDB").getCollection("Master", Master.class);
    }

    @Override
    public List<Master> findAllMasters() {
        return masterCollection.find().into(new ArrayList<>());
    }

    @Override
    public Master saveMaster(Master master) {
        long lastId = masterCollection.countDocuments() + 1;
        master.setId((int) lastId);
        master.setCampaign(new ArrayList<Campaign>());
        master.setMonster(new ArrayList<Monster>());
        masterCollection.insertOne(master);
        return master;
    }

    @Override
    public long deleteMaster(int masterId) {
        return masterCollection.deleteMany(eq("_id", masterId)).getDeletedCount();
    }

    @Override
    public Optional<Master> findById(int masterId) {
        Master master = masterCollection.find(eq("_id", masterId)).first();
        return Optional.ofNullable(master);
    }

    ///
    /// Campaign
    ///
    @Override
    public Master saveCampaign(Master master) {
        masterCollection.updateOne(eq("_id", master.getId()),
                new Document("$set", new Document("campaign", master.getCampaign())));
        return master;
    }

    @Override
    public long deleteCampaign(int masterId, int campaignId) {
        return masterCollection.updateOne(
            Filters.and(Filters.eq("_id", masterId), Filters.eq("campaign._id", campaignId)),
            Updates.pull("campaign", new Document("_id", campaignId))
        ).getModifiedCount();
    }    
}
