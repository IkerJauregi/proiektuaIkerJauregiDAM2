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
        // Recorre las campañas del usuario y actualiza los items de cada campaña
        userr.getCampaigns().forEach(campaign -> {
            List<Item> items = campaign.getItem();
            // Crea el filtro para identificar la campaña en la colección
            Bson filter = Filters.eq("_id", campaign.getId());
            // Crea la actualización para establecer los nuevos items en la campaña
            Bson update = Updates.set("item", items);
            // Ejecuta la actualización en la colección de campañas
            userrCollection.updateOne(filter, update);
        });
    
        // Actualiza el usuario en la colección de usuarios
        Bson userFilter = Filters.eq("_id", userr.getId());
        Bson userUpdate = new Document("$set", userr);
        userrCollection.updateOne(userFilter, userUpdate);
    
        return userr;
    }
    
}
