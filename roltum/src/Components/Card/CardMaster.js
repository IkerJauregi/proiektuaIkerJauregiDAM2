import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./CardMaster.css";

function CardMaster({ master }) {
  let[idMaster, setIdMaster ] = useState(0);
  let navigate = useNavigate();

  let selectedMaster = () => {
    idMaster = master.id;
    setIdMaster(idMaster);
    navigate(`/campaigns/${idMaster}`);
  };
  return (
    <li>
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h2>{master.name}</h2>
            <div className="buttons">
              <button onClick={selectedMaster}>View</button>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

function CardCampaign({ campaign }) {
  return (
    <li>
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h2>{campaign.name}</h2>
            <div className="buttons">
              <Link to={`/campaign/${campaign.id}`}>View</Link>
              <button>Edit</button>
              <button>Delete</button>
              {/* add any other data you want to display */}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export { CardMaster, CardCampaign };
