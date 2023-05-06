export function displayCampaign(userID) {
  if (!userID) {
    console.log("No user ID provided");
    return [];
  } else {
    return fetch(`http://localhost:8080/user/showMasterCampaigns/${userID}`)
      .then(response => response.json())
      .then(data => {
        let user = data;
        let campaigns = user.campaign || [];
        return { user, campaigns };
      })
      .catch(error => {
        console.log(error);
        throw error; // or return Promise.reject(error);
      });
  }
}

export function createCampaign(campaignName, campaignDescription) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      campaignName: campaignName,
      campaignDescription: campaignDescription})
  };
  return fetch("http://localhost:8080/campaigns/createCampaign", requestOptions)
  .then(response => {
    if (response.status === 400) {
      throw new Error("Bad request: Invalid input parameters");
    } else if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log("Campaign created successfully:", data.message);
    return data;
  })
  .catch(error => {
    console.error("Campaign creation failed:", error);
    throw error;
  });
}
export function deleteCampaign(userID, campaignID) {
  if (!userID) {
    console.log("No user ID provided");
    return [];
  } else {
    return fetch(`http://localhost:8080/campaigns/deleteCampaign/${userID}/${campaignID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        let user = data;
        let campaigns = user.campaign || [];
        return { user, campaigns };
      })
      .then(() => {
        // reload the page when the campaign is deleted
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        throw error; // or return Promise.reject(error);
      });
  }
}
export function updateCampaign(userID, campaignID, campaignName, campaignDescription) {
  if (!userID) {
    // Manejar el caso cuando userID no está definido
    console.log("No user ID provided");
    return [];
  } else {
    return fetch(`http://localhost:8080/campaigns/editCampaign/${userID}/${campaignID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        campaignName: campaignName,
        campaignDescription: campaignDescription
      })
    })
      .then(response => response.json())
      .then(data => {
        let user = data;
        let campaigns = user.campaign || [];
        return { user, campaigns };
      }).catch(error => {
        console.log(error);
        throw error; // o también se puede retornar Promise.reject(error);
      });
  }
}

