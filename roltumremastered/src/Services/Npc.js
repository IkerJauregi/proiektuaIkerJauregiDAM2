export function displayNpcs(userID, campaignID) {
    if (!userID || !campaignID) {
        console.log("No user ID or campaign ID provided");
        return [];
    } else {
        return fetch(`http://localhost:8080/npc/displayNpc/${userID}/${campaignID}`)
            .then(response => response.json())
            .then(data => {
                let npcs = data;
                console.log("Data:", data);
                return npcs;
            })
            .catch(error => {
                console.error("Error:", error);
                throw error;
            });
    }
}
export function deleteNPC(userID, campaignID, npcID) {
    console.log("Deleting npc: ", userID, campaignID, npcID);
    if (!userID || !campaignID || !npcID) {
        console.log("No user ID or campaign ID provided");
        return [];
    } else {
    console.log("Deleting npc: ", userID, campaignID, npcID);

        return fetch(`http://localhost:8080/npc/deleteNpc/${userID}/${campaignID}/${npcID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                let npcs = data;
                console.log("Data:", data);
                return npcs;
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