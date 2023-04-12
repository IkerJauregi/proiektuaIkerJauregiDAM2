import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { displaySelectedMaster } from '../../Services/MasterApi';
import { CardMaster, CardCampaign } from '../Card/CardMaster';

function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    displaySelectedMaster(id)
      .then(data => {
        console.log(data); // Agregar este console.log para ver los datos obtenidos
        setCampaigns(data.campaigns || []); // Agregar condición para verificar si campaigns es undefined o null
      })
      .catch(error => console.log(error));
  }, [id]);
  

  return (
    <div>
      <h1>Lista de Campañas</h1>
      <ul>
        {campaigns && campaigns.map(campaign => (
          <CardCampaign key={campaign.id} campaign={campaign} />
        ))}
      </ul>
    </div>
  );
}

export default CampaignList;
