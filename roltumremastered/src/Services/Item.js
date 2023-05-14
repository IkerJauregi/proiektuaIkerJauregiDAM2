export function displayItem(userID, campaignID){
    if(!userID || !campaignID){
        console.log("No user ID or campaign ID provided");
        return [];
    } else {
        return fetch(`http://localhost:8080/item/viewItems/${userID}/${campaignID}`)
        .then(response => response.json())
        .then(data => {
            let items = data;
            console.log("Data:", data);
            return items;
        })
        .catch(error => {
            console.error("Error:", error);
            throw error;
        });
    }
}
export function deleteItem(userID, campaignID, itemID){
    if(!userID || !campaignID || !itemID){
        console.log("No user ID, campaign ID, or item ID provided");
        return [];
    } else {
        return fetch(`http://localhost:8080/item/deleteItem/${userID}/${campaignID}/${itemID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
        .then(data => {
            let items = data;
            console.log("Data:", data);
            return items;
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
export function createItem(userID, campaignID, params){
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: params
    };
    return fetch(`http://localhost:8080/item/createItem/${userID}/${campaignID}?${params}`, {
        method: "POST",
    })
    .then(response => {
        if(response.status === 400){
            throw new Error("Bad request: Invalid input parameters");
        } else if (!response.ok){
            throw new Error("Server error");
        } else {
            return response.json();
        }
    })
    .then(data => {
        let items = data;
        console.log("Data:", data);
        return items;
    })
    .catch(error => {
        console.error("Error:", error);
        throw error;
    });
}