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