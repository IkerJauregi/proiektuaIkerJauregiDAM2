package com.restapirol.controller;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.restapirol.model.UserRepository;
import com.restapirol.model.Userr;
import com.restapirol.model.adventurer.Stats;
import com.restapirol.model.adventurer.Weapon;
import com.restapirol.model.monster.Monster;

@RestController
@RequestMapping(path = "/monster")
public class MonsterController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public MonsterController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        // Do some error handling here
        return "An error occurred: " + request.getAttribute("javax.servlet.error.message");
    }

    // Create a new monster
    @PostMapping(path = "/createMonster/{userID}")
    public ResponseEntity<Object> addNewMonster(@PathVariable int userID, @RequestParam String name, @RequestParam String description,
            @RequestParam String size, @RequestParam String type, @RequestParam String alignment,
            @RequestParam int armorClass, @RequestParam int hitPoints, @RequestParam String speed,
            @RequestParam int strength, @RequestParam int dexterity, @RequestParam int constitution,
            @RequestParam int intelligence, @RequestParam int wisdom, @RequestParam int charisma,
            @RequestParam String weaponName, @RequestParam String weaponType, @RequestParam String weaponDamage,
            @RequestParam String weaponDamageType, @RequestParam String weaponProperties,
            @RequestParam List<String> languages,
            @RequestParam int challengeRating) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // if user exits then create a new monster
        if (userOptional.isPresent()) {
            Monster monster = new Monster();
            monster.setName(name);
            monster.setDescription(description);
            monster.setSize(size);
            monster.setType(type);
            monster.setAlignment(alignment);
            monster.setArmorClass(armorClass);
            monster.setHitPoints(hitPoints);
            monster.setSpeed(speed);
            // Create stats object and set stats
            Stats stats = new Stats();
            stats.setStrength(strength);
            stats.setDexterity(dexterity);
            stats.setConstitution(constitution);
            stats.setIntelligence(intelligence);
            stats.setWisdom(wisdom);
            stats.setCharisma(charisma);
            monster.setStats(stats);
            // Create weapon object and set weapon
            Weapon weapon = new Weapon();
            weapon.setName(weaponName);
            weapon.setType(weaponType);
            weapon.setDamage(weaponDamage);
            weapon.setDamageType(weaponDamageType);
            weapon.setProperties(weaponProperties);
            monster.setWeapon(weapon);

            monster.setLanguages(languages);
            monster.setChallengeRating(challengeRating);
            // Add monster to user
            Userr user = userOptional.get();
            List<Monster> monstersList = user.getMonsters();
            int newMonsterId = monstersList.size() + 1;
            monster.setId(newMonsterId);
            monstersList.add(monster);
            user.setMonsters(monstersList);
            Userr updatedUser = userRepository.saveMonster(user);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    // Get all monsters
    @GetMapping(path = "/getAllMonsters/{userID}")
    public ResponseEntity<Object> getAllMonsters(@PathVariable int userID) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            List<Monster> monstersList = user.getMonsters();
            return ResponseEntity.ok(monstersList);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    // Edit select monster
    @PostMapping(path = "/editMonster/{userID}/{monsterID}")
    public ResponseEntity<Object> editMonster(@PathVariable int userID, @PathVariable int monsterID, @RequestParam String name, @RequestParam String description,
            @RequestParam String size, @RequestParam String type, @RequestParam String alignment,
            @RequestParam int armorClass, @RequestParam int hitPoints, @RequestParam String speed,
            @RequestParam int strength, @RequestParam int dexterity, @RequestParam int constitution,
            @RequestParam int intelligence, @RequestParam int wisdom, @RequestParam int charisma,
            @RequestParam String weaponName, @RequestParam String weaponType, @RequestParam String weaponDamage,
            @RequestParam String weaponDamageType, @RequestParam String weaponProperties,
            @RequestParam List<String> languages,
            @RequestParam int challengeRating) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            List<Monster> monstersList = user.getMonsters();
            for (Monster monster : monstersList) {
                if (monster.getId() == monsterID) {
                    monster.setName(name);
                    monster.setDescription(description);
                    monster.setSize(size);
                    monster.setType(type);
                    monster.setAlignment(alignment);
                    monster.setArmorClass(armorClass);
                    monster.setHitPoints(hitPoints);
                    monster.setSpeed(speed);
                    // Create stats object and set stats
                    Stats stats = new Stats();
                    stats.setStrength(strength);
                    stats.setDexterity(dexterity);
                    stats.setConstitution(constitution);
                    stats.setIntelligence(intelligence);
                    stats.setWisdom(wisdom);
                    stats.setCharisma(charisma);
                    monster.setStats(stats);
                    // Create weapon object and set weapon
                    Weapon weapon = new Weapon();
                    weapon.setName(weaponName);
                    weapon.setType(weaponType);
                    weapon.setDamage(weaponDamage);
                    weapon.setDamageType(weaponDamageType);
                    weapon.setProperties(weaponProperties);
                    monster.setWeapon(weapon);

                    monster.setLanguages(languages);
                    monster.setChallengeRating(challengeRating);
                    break;
                }
            }
            user.setMonsters(monstersList);
            Userr updatedUser = userRepository.saveMonster(user);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
