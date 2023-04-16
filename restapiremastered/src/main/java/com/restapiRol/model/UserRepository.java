package com.restapiRol.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository {
    Userr findByName(String name);
    Userr saveUserr(Userr user);
}
