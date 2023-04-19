import React from "react";
import "./Card.css";

function Card({campaign}) {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{campaign.name}</h2>
      </div>
    </div>
  );
}

export { Card };
