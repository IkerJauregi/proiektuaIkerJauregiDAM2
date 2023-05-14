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