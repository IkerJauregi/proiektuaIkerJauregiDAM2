export function displayCampaign(userID) {
  if (!userID) {
    console.log("No user ID provided");
    return [];
  }else{
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

}
export function deleteCampaign(campaignID) {

}
export function updateCampaign(campaignID, params) {

}