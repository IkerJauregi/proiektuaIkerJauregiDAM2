package com.restapirol.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<Userr, Long>{
    Userr findByName(String name);
}
