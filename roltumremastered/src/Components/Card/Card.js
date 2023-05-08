import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Card.css";
import { deleteCampaign } from "../../Services/Campaign";
import { CampaignUpdateForm } from "../Form/CampaignForm";
function Card({ campaign }) {
  const userID = sessionStorage.getItem("userId");
  const navigate = useNavigate();
  const [showUpdateForm, setShowUpdateForm] = useState(false); // nuevo estado
  console.log("Card: ", campaign);
  const viewSelectedCampaign = () => {
    console.log("Viewing campaign: ", campaign);
  };

  const editSelectedCampaign = () => {
    console.log("Editing campaign: ", campaign);
    setShowUpdateForm(true); // mostrar el formulario
  };

  const deleteSelectedCampaign = () => {
    console.log("Deleting campaign: ", campaign.id);
    console.log(userID);
    deleteCampaign(userID, campaign.id);
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Name: {campaign.name}</h2>
          <div className="card-image"></div>
          <h3 className="card-description-title">Description: </h3>
          <p className="card-description-text">{campaign.description}</p>
          <div className="buttons-card">
            <button className="button-card" onClick={viewSelectedCampaign}>
              View
            </button>
            <button className="button-card" onClick={editSelectedCampaign}>
              Edit
            </button>
            <button className="button-card" onClick={deleteSelectedCampaign}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {showUpdateForm && ( // renderizar el formulario si se debe mostrar
        <CampaignUpdateForm
          userID={userID}
          campaignId={campaign.id}
          campaignName={campaign.name}
          campaignDescription={campaign.description}
        />
      )}
    </div>
  );
}

export { Card };