import React from "react";
import "./Card.css";

function Card({ campaign }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">{campaign.name}</h2>
          <div className="buttons">
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
