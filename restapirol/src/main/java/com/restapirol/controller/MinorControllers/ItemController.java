package com.restapirol.controller.MinorControllers;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.restapirol.model.UserRepository;
import com.restapirol.model.Userr;
import com.restapirol.model.campaign.Campaign;
import com.restapirol.model.campaign.item.Curse;
import com.restapirol.model.campaign.item.Item;

@RestController
@RequestMapping(path = "/item")
public class ItemController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public ItemController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request) {
        // Do some error handling here
        return "An error occurred: " + request.getAttribute("javax.servlet.error.message");
    }

    // Create a new item and add it to the campaign with the given ID
    @PostMapping(path = "/createItem/{userID}/{campaignID}")
    public ResponseEntity<Object> addNewItem(@PathVariable int userID, @PathVariable int campaignID,
            @RequestParam String itemName, @RequestParam String itemDescription, @RequestParam String itemClass,
            @RequestParam String itemStats, @RequestParam String curseName, @RequestParam String curseDescription) {

        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, create a new item
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();

            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();

            // If the campaign exists, add the item to the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();

                // Generate a new unique item ID
                int newItemId = 1;
                List<Item> items = campaign.getItem();
                if (!items.isEmpty()) {
                    newItemId = items.get(items.size() - 1).getId() + 1;
                }

                // Create a new item
                Item item = new Item();
                item.setId(newItemId);
                item.setItemName(itemName);
                item.setItemDescription(itemDescription);
                item.setItemClass(itemClass);
                item.setItemStats(itemStats);

                // Create a new curse
                Curse curse = new Curse();
                curse.setCurseName(curseName);
                curse.setCurseDescription(curseDescription);

                // Add the curse to the item
                item.setItemCurse(curse);

                // Add the item to the campaign
                items.add(item);
                campaign.setItem(items);

                // Save the changes to the user
                userRepository.saveItem(user);

                return ResponseEntity.ok(item);
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete the item with the given ID from the campaign
    @DeleteMapping(path = "/deleteItem/{userID}/{campaignID}/{itemID}")
    public ResponseEntity<Object> deleteItem(@PathVariable int userID, @PathVariable int campaignID,
            @PathVariable int itemID) {

        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, delete the item
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();

            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();

            // If the campaign exists, delete the item from the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();

                // Find the item with the given ID
                Optional<Item> itemOptional = campaign.getItem().stream()
                        .filter(item -> item.getId() == itemID)
                        .findFirst();

                // If the item exists, delete it
                if (itemOptional.isPresent()) {
                    Item item = itemOptional.get();

                    // Delete the item from the campaign
                    campaign.getItem().remove(item);

                    // Save the changes to the user
                    userRepository.saveItem(user);

                    return ResponseEntity.ok(item);
                } else {
                    return ResponseEntity.notFound().build();
                }
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // View the item with the given ID from the campaign with the given ID
    @RequestMapping(path = "/viewItems/{userID}/{campaignID}")
    public ResponseEntity<Object> viewItems(@PathVariable int userID, @PathVariable int campaignID) {

        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, view the items
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();

            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();

            // If the campaign exists, view the items from the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();

                List<Item> items = campaign.getItem();
                return ResponseEntity.ok(items);
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    // Update the item with the given ID from the campaign with the given ID
    @PostMapping(path = "/updateItem/{userID}/{campaignID}/{itemID}")
    public ResponseEntity<Object> updateItem(@PathVariable int userID, @PathVariable int campaignID,
            @PathVariable int itemID, @RequestParam String itemName, @RequestParam String itemDescription,
            @RequestParam String itemClass, @RequestParam String itemStats, @RequestParam String curseName,
            @RequestParam String curseDescription) {

        Optional<Userr> userOptional = userRepository.findById(userID);
        // If the user exists, update the item
        if (userOptional.isPresent()) {
            Userr user = userOptional.get();

            // Find the campaign with the given ID
            Optional<Campaign> campaignOptional = user.getCampaigns().stream()
                    .filter(campaign -> campaign.getId() == campaignID)
                    .findFirst();

            // If the campaign exists, update the item from the campaign
            if (campaignOptional.isPresent()) {
                Campaign campaign = campaignOptional.get();

                // Find the item with the given ID
                Optional<Item> itemOptional = campaign.getItem().stream()
                        .filter(item -> item.getId() == itemID)
                        .findFirst();

                // If the item exists, update it
                if (itemOptional.isPresent()) {
                    Item item = itemOptional.get();

                    // Update the item
                    item.setItemName(itemName);
                    item.setItemDescription(itemDescription);
                    item.setItemClass(itemClass);
                    item.setItemStats(itemStats);

                    // Update the curse
                    Curse curse = item.getItemCurse();
                    curse.setCurseName(curseName);
                    curse.setCurseDescription(curseDescription);

                    // Save the changes to the user
                    userRepository.saveItem(user);

                    return ResponseEntity.ok(item);
                } else {
                    return ResponseEntity.notFound().build();
                }
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}