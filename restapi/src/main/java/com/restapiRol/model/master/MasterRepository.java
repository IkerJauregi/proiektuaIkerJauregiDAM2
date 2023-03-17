package com.restapiRol.model.master;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.restapiRol.model.master.campaign.Campaign;

@Repository
public interface MasterRepository {
    List<Master> findAllMasters();
    Master saveMaster(Master master);
    long deleteMaster(int masterId);
    Optional<Master>  findById(int masterId);
    // Campaign
    Master saveCampaign(Master master);
    long deleteCampaign(int masterId, int campaignId);
}
