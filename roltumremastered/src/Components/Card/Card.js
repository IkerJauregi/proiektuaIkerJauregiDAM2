import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./Card.css";
import { deleteCampaign } from "../../Services/Campaign";
import { deleteQuest } from "../../Services/Quest";
import { deleteNPC } from "../../Services/Npc";
import { deleteItem } from "../../Services/Item";
import { deleteTown } from "../../Services/Town";
import { deleteAdventurer } from "../../Services/Adventurer";
function Card({ campaign }) {
  const userID = sessionStorage.getItem("userId");
  const navigate = useNavigate();
  console.log("Card: ", campaign);
  const viewSelectedCampaign = () => {
    console.log("Viewing campaign: ", campaign);
    navigate(`/menuinqt/${userID}/${campaign.id}`);
  };

  const editSelectedCampaign = () => {
    console.log("Editing campaign: ", campaign);
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
    </div>
  );
}
function AdventurerCard({ adventurer }) {
  const userID = sessionStorage.getItem("userId");
  const navigate = useNavigate();
  const [showUpdateForm, setShowUpdateForm] = useState(false); // nuevo estado
  const viewSelectedAdventurer = () => {
    console.log("Viewing adventurer: ", adventurer);
    navigate(`/selectedadventurer/${userID}/${adventurer.id}`);
  };
  const editSelectedAdventurer = () => {
    console.log("Editing adventurer: ", adventurer);
  };
  const deleteSelectedAdventurer = () => {
    console.log("Deleting adventurer: ", adventurer.id);
    deleteAdventurer(userID, adventurer.id);
  };
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Name: {adventurer.name}</h2>
          <div className="card-image"></div>
          <h3 className="card-description-title">Description: </h3>
          <p className="card-description-text">{adventurer.description}</p>
          <div className="buttons-card">
            <button className="button-card" onClick={viewSelectedAdventurer}>
              View
            </button>
            <button className="button-card" onClick={editSelectedAdventurer}>
              Edit
            </button>
            <button className="button-card" onClick={deleteSelectedAdventurer}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NpcCard({ npc }) {
  const userID = sessionStorage.getItem("userId");
  const { campaignId } = useParams();
  const navigate = useNavigate();

  const editSelectedNpc = () => {
    console.log("Editing npc: ", npc);
  }
  const deleteSelectedNpc = () => {
    console.log("Deleting npc: ", npc.id);
    deleteNPC(userID, campaignId, npc.id);
  }
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Name: {npc.npcName}</h2>
          <div className="card-image"></div>
          <p className="card-description-text"><strong>Description:</strong> {npc.npcDescription}</p>
          <p><strong>Tag:</strong> {npc.npcTags}</p>
          <p><strong>Inventory:</strong> {npc.npcInventory}</p>
          <div className="buttons-card">
            {/* <button className="button-card" onClick={editSelectedNpc}>
              Edit
            </button> */}
            <button className="button-card" onClick={deleteSelectedNpc}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestCard({ quest }) {
  const userID = sessionStorage.getItem("userId");
  const { campaignId } = useParams();
  const navigate = useNavigate();

  const editSelectedQuest = () => {
    console.log("Editing quest: ", quest);
  }
  const deleteSelectedQuest = () => {
    console.log("Deleting quest: ", quest.id);
    deleteQuest(userID, campaignId, quest.id);
  }
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Name: {quest.questName}</h2>
          <div className="card-image"></div>
          <h3 className="card-description-title">Description: </h3>
          <p className="card-description-text">{quest.questDescription}</p>
          <p className="card-description-text">{quest.questBounty}</p>
          <div className="buttons-card">
            {/* <button className="button-card" onClick={editSelectedQuest}>
              Edit
            </button> */}
            <button className="button-card" onClick={deleteSelectedQuest}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function ItemCard({ item }) {
  const userID = sessionStorage.getItem("userId");
  const { campaignId } = useParams();
  const navigate = useNavigate();

  const editSelectedItem = () => {
    console.log("Editing item: ", item);
  }
  const deleteSelectedItem = () => {
    console.log("Deleting item: ", item.id);
    deleteItem(userID, campaignId, item.id);
  }
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Name: {item.itemName}</h2>
          <div className="card-image"></div>
          <h3 className="card-description-title">Description: </h3>
          <p className="card-description-text">{item.itemDescription}</p>
          <p className="card-description-text">{item.itemClass}</p>
          <p className="card-description-text">{item.itemStats}</p>
          <div className="buttons-card">
            <button className="button-card" onClick={editSelectedItem}>
              Edit
            </button>
            <button className="button-card" onClick={deleteSelectedItem}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function TownCard({ town }) {
  const userID = sessionStorage.getItem("userId");
  const { campaignId } = useParams();
  const navigate = useNavigate();

  const editSelectedTown = () => {
    console.log("Editing town: ", town);
  }
  const deleteSelectedTown = () => {
    console.log("Deleting town: ", town.id);
    deleteTown(userID, campaignId, town.id);
  }
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Name: {town.name}</h2>
          <div className="card-image"></div>
          <h3 className="card-description-title">Description: </h3>
          <p className="card-description-text">{town.description}</p>
          <div className="buttons-card">
            <button className="button-card" onClick={editSelectedTown}>
              Edit
            </button>
            <button className="button-card" onClick={deleteSelectedTown}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Card, AdventurerCard, NpcCard, QuestCard, ItemCard, TownCard };