package com.restapirol.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.restapirol.model.UserRepository;
import com.restapirol.model.Userr;
import com.restapirol.model.adventurer.Adventurer;
import com.restapirol.model.adventurer.Money;
import com.restapirol.model.adventurer.Stats;
import com.restapirol.model.adventurer.Weapon;

@RestController
@RequestMapping(path = "/adventurer")
public class AdventurerController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public AdventurerController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        // Do some error handling here
        return "An error occurred: " + request.getAttribute("javax.servlet.error.message");
    }

    // Create a new adventurer
    @PostMapping(path = "/createAdventurer/{userID}")
    public ResponseEntity<Object> addNewAdventurer(@PathVariable int userID, @RequestParam String name,
            @RequestParam String classAdventurer,
            @RequestParam String raceAdventurer, @RequestParam int level, @RequestParam List<String> languages,
            @RequestParam List<String> inventory, @RequestParam int strength, @RequestParam int dexterity,
            @RequestParam int constitution, @RequestParam int intelligence, @RequestParam int wisdom,
            @RequestParam int charisma, @RequestParam int copper, @RequestParam int silver, @RequestParam int gold,
            @RequestParam String weaponName, @RequestParam String weaponType, @RequestParam String weaponDamage,
            @RequestParam String weaponDamageType, @RequestParam String weaponProperties) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        // if user exits then create a new adventurer
        if (userOptional.isPresent()) {
            Adventurer adventurer = new Adventurer();
            adventurer.setName(name);
            adventurer.setClassAdventurer(classAdventurer);
            adventurer.setRaceAdventurer(raceAdventurer);
            adventurer.setLevel(level);
            adventurer.setLanguages(languages);
            adventurer.setInventory(inventory);
            // Create stats obeject and set it to the adventurer
            Stats stats = new Stats();
            stats.setStrength(strength);
            stats.setDexterity(dexterity);
            stats.setConstitution(constitution);
            stats.setIntelligence(intelligence);
            stats.setWisdom(wisdom);
            stats.setCharisma(charisma);
            adventurer.setStats(stats);
            // Create money object and set it to the adventurer
            Money money = new Money();
            money.setCopperCoin(copper);
            money.setSilverCoin(silver);
            money.setGoldCoin(gold);
            adventurer.setMoney(money);
            // Create weapon object and set it to the adventurer
            Weapon weapon = new Weapon();
            weapon.setName(weaponName);
            weapon.setType(weaponType);
            weapon.setDamage(weaponDamage);
            weapon.setDamageType(weaponDamageType);
            weapon.setProperties(weaponProperties);
            adventurer.setWeapon(weapon);
            // Get the user and add the adventurer to the list of adventurers
            Userr user = userOptional.get();
            List<Adventurer> adventurerList = user.getAdventurers();
            int newAdventurerId = adventurerList.size() + 1;
            adventurer.setId(newAdventurerId);
            adventurerList.add(adventurer);
            user.setAdventurers(adventurerList);
            Userr updatedUser = userRepository.saveAdventurer(user);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Get all adventurers from a user
    @GetMapping(path = "/showMasterAdventurers/{userID}")
    public ResponseEntity<Userr> showMasterAdventurers(@PathVariable int userID) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete selected adventurer
    @DeleteMapping(path = "/deleteAdventurer/{userID}/{adventurerID}")
    public ResponseEntity<Object> deleteAdventurer(@PathVariable int userID, @PathVariable int adventurerID) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            List<Adventurer> adventurerList = user.getAdventurers();
            List<Adventurer> newAdventurerList = new ArrayList<>();
            for (Adventurer adventurer : adventurerList) {
                if (adventurer.getId() != adventurerID) {
                    newAdventurerList.add(adventurer);
                }
            }
            user.setAdventurers(newAdventurerList);
            Userr updatedUser = userRepository.saveAdventurer(user);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Edit selected adventurer
    @PostMapping(path = "/editAdventurer/{userID}/{adventurerID}")
    public ResponseEntity<Userr> editAdventurer(@PathVariable int userID, @PathVariable int adventurerID,
            @RequestParam String name, @RequestParam String classAdventurer,
            @RequestParam String raceAdventurer, @RequestParam int level, @RequestParam List<String> languages,
            @RequestParam List<String> inventory, @RequestParam int strength, @RequestParam int dexterity,
            @RequestParam int constitution, @RequestParam int intelligence, @RequestParam int wisdom,
            @RequestParam int charisma, @RequestParam int copper, @RequestParam int silver, @RequestParam int gold,
            @RequestParam String weaponName, @RequestParam String weaponType, @RequestParam String weaponDamage,
            @RequestParam String weaponDamageType, @RequestParam String weaponProperties) {
        Optional<Userr> userOptional = userRepository.findById(userID);
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();
            List<Adventurer> adventurerList = user.getAdventurers();
            for (Adventurer adventurer : adventurerList) {
                if (adventurer.getId() == adventurerID) {
                    adventurer.setName(name);
                    adventurer.setClassAdventurer(classAdventurer);
                    adventurer.setRaceAdventurer(raceAdventurer);
                    adventurer.setLevel(level);
                    adventurer.setLanguages(languages);
                    adventurer.setInventory(inventory);
                    // Create stats obeject and set it to the adventurer
                    Stats stats = new Stats();
                    stats.setStrength(strength);
                    stats.setDexterity(dexterity);
                    stats.setConstitution(constitution);
                    stats.setIntelligence(intelligence);
                    stats.setWisdom(wisdom);
                    stats.setCharisma(charisma);
                    adventurer.setStats(stats);
                    // Create money object and set it to the adventurer
                    Money money = new Money();
                    money.setCopperCoin(copper);
                    money.setSilverCoin(silver);
                    money.setGoldCoin(gold);
                    adventurer.setMoney(money);
                    // Create weapon object and set it to the adventurer
                    Weapon weapon = new Weapon();
                    weapon.setName(weaponName);
                    weapon.setType(weaponType);
                    weapon.setDamage(weaponDamage);
                    weapon.setDamageType(weaponDamageType);
                    weapon.setProperties(weaponProperties);
                    adventurer.setWeapon(weapon);
                }
            }
            user.setAdventurers(adventurerList);
            Userr updatedUser = userRepository.saveAdventurer(user);
            return ResponseEntity.ok(updatedUser);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
