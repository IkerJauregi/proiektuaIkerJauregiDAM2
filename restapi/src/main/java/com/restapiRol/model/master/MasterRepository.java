package com.restapiRol.model.master;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

@Repository
public interface MasterRepository {
    List<Master> findAllMasters();
    Master saveMaster(Master master);
    long deleteMaster(String name);
    Optional<Master> findById(int masterId);
    Master saveCampaign(Master master);
}
