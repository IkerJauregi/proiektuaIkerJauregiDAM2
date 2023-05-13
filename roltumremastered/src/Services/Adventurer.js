export function displayAdventurer(userID) {
    if (!userID) {
        console.log("No user ID provided");
        return [];
    } else {
        return fetch(`http://localhost:8080/adventurer/showMasterAdventurers/${userID}`)
            .then(response => response.json())
            .then(data => {
                let user = data;
                let adventurers = user.adventurers || [];
                console.log("Data:", data);
                return { user, adventurers };
            })
            .catch(error => {
                console.log(error);
                throw error; // or return Promise.reject(error);
            });
    }
}
export function createAdventurer(userID, adventurerName, adventurerDescription) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            adventurerName: adventurerName,
            adventurerDescription: adventurerDescription
        })
    };
    return fetch(`http://localhost:8080/user/createAdventurer/${userID}`, requestOptions)
        .then(response => {
            if (response.status === 400) {
                throw new Error("Bad request: Invalid input parameters");
            } else if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Adventurer created successfully:", data.message);
            return data;
        })
        .catch(error => {
            console.error("Adventurer creation failed:", error);
            throw error;
        });
}

export function deleteAdventurer(userID, adventurerID) {
    if (!userID) {
        console.log("No user ID provided");
        return [];
    } else {
        return fetch(`http://localhost:8080/adventurer/deleteAdventurer/${userID}/${adventurerID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                let user = data;
                let adventurers = user.adventurers || [];
                console.log("Data:", data);
                return { user, adventurers };
            })
            .then(() => {
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
                throw error; // or return Promise.reject(error);
            });
    }
}

export function updateCampaign(userID, campaignID, campaignName, campaignDescription) {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            campaignName: campaignName,
            campaignDescription: campaignDescription
        })
    };
    return fetch(`http://localhost:8080/campaigns/updateCampaign/${userID}/${campaignID}`, requestOptions)
        .then(response => {
            if (response.status === 400) {
                throw new Error("Bad request: Invalid input parameters");
            } else if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Campaign updated successfully:", data.message);
            return data;
        })
        .catch(error => {
            console.error("Campaign update failed:", error);
            throw error;
        });
}
