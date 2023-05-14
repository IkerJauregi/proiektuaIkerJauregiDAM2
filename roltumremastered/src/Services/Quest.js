export function displayQuest(userID, campaignID) {
    if (!userID || !campaignID) {
        console.log("No user ID or campaign ID provided");
        return [];
    } else {
        return fetch(`http://localhost:8080/quest/getQuest/${userID}/${campaignID}`)
            .then(response => response.json())
            .then(data => {
                let quests = data;
                console.log("Data:", data);
                return quests;
            })
            .catch(error => {
                console.error("Error:", error);
                throw error;
            });
    }
}

export function deleteQuest(userID, campaignID, questID) {
    console.log("Deleting quest: ", userID, campaignID, questID);
    if (!userID || !campaignID || !questID) {
        console.log("No user ID or campaign ID provided");
        return [];
    } else {
        console.log("Deleting quest: ", userID, campaignID, questID);

        return fetch(`http://localhost:8080/quest/deleteQuest/${userID}/${campaignID}/${questID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                let quests = data;
                console.log("Data:", data);
                return quests;
            }).then(() => {
                // reload the page when the campaign is deleted
                window.location.reload();
            })
            .catch(error => {
                console.error("Error:", error);
                throw error;
            });
    }
}
export function createQuest(userID, campaignID, params) {
    console.log("Creating quest: ", userID, campaignID, params);
    if (!userID || !campaignID) {
        console.log("No user ID or campaign ID provided");
        return [];
    } else {
        return fetch(`http://localhost:8080/quest/createQuest/${userID}/${campaignID}?${params}`, {
            method: "POST",
        }).then(response => {
            if (response.status === 400) {
                throw new Error("Bad request: Invalid input parameters");
            } else if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
            .then(data => {
                console.log("NPC created successfully:", data.message);
                return data;
            })
            .catch(error => {
                console.error("NPC creation failed:", error);
                throw error;
            });
    }
}