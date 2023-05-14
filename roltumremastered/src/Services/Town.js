export function displayTown(userID, campaignID) {
    if (!userID || !campaignID) {
        console.log("No user ID or campaign ID provided");
        return [];
    } else {
        return fetch(`http://localhost:8080/town/getTown/${userID}/${campaignID}`)
            .then(response => response.json())
            .then(data => {
                let towns = data;
                console.log("Data:", data);
                return towns;
            })
            .catch(error => {
                console.error("Error:", error);
                throw error;
            });
    }
}

export function deleteTown(userID, campaignID, townID) {
    console.log("Deleting town: ", userID, campaignID, townID);
    if (!userID || !campaignID || !townID) {
        console.log("No user ID or campaign ID provided");
        return [];
    } else {
        console.log("Deleting town: ", userID, campaignID, townID);

        return fetch(`http://localhost:8080/town/deleteTown/${userID}/${campaignID}/${townID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                let towns = data;
                console.log("Data:", data);
                return towns;
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