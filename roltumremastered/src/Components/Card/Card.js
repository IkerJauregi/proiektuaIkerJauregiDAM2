import React from "react";
import "./Card.css";

function Card({campaign}) {

  return (
    <div className="card">
      {/* <img className="card-image" src={campaigns.image} alt={campaigns.name} /> */}
      <div className="card-content">
        <h2 className="card-title">{campaign.name}</h2>
        {/* <p className="card-description">{campaigns.description}</p>
        <button className="card-button" onClick={campaigns.onClick}>
          {campaigns.buttonText}
        </button> */}
      </div>
    </div>
  );
}

export { Card };
