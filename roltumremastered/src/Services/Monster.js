export function displayMonster(userID){
    if(!userID){
        console.log("No user ID provided");
        return [];
    } else {
        return fetch(`http://localhost:8080/monster/showMasterMonsters/${userID}`)
        .then(response => response.json())
        .then(data => {
            let user = data;
            let monsters = user.monsters || [];
            console.log("Service data:", data);
            return { user, monsters };
        })
        .catch(error => {
            console.log(error);
            throw error;
        });
    }
}
export function createMonster(userID, params){
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: params
    };
    return fetch(`http://localhost:8080/monster/createMonster/${userID}?${params}`, {
        method: "POST",
    })
    .then(response => {
        if (response.status === 400) {
            throw new Error("Bad request: Invalid input parameters");
        } else if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log("Monster created successfully:", data.message);
        return data;
    })
    .catch(error => {
        console.error("Monster creation failed:", error);
        throw error;
    });
}
export function deleteMonster(userID, monsterID){
    if(!userID){
        console.log("No user ID provided");
        return [];
    } else {
        return fetch(`http://localhost:8080/monster/deleteMonster/${userID}/${monsterID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            let user = data;
            let monsters = user.monsters || [];
            console.log("Data:", data);
            return { user, monsters };
        })
        .then(() => {
            window.location.reload();
            })
        .catch(error => {
            console.log(error);
            throw error;
        });
    }
}
export function updateMonster(userID, monsterID, monsterName, monsterDescription){
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            monsterName: monsterName,
            monsterDescription: monsterDescription
        })
    };
    return fetch(`http://localhost:8080/monster/updateMonster/${userID}/${monsterID}`, requestOptions)
    .then(response => {
        if (response.status === 400) {
            throw new Error("Bad request: Invalid input parameters");
        } else if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log("Monster updated successfully:", data.message);
        return data;
    })
    .catch(error => {
        console.error("Monster update failed:", error);
        throw error;
    });
}