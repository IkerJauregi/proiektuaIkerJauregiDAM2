package com.restapiRol.model.master.campaign;

import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public interface CampaignRepository {
    List<Campaign> findAll();
    Campaign save(Campaign campaign);
    long delete(String name);
}
