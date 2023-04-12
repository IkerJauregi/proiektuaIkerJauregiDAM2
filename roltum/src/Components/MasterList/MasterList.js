import React, { useState, useEffect } from 'react';
import { displayAllMasters } from '../../Services/MasterApi';
import { CardMaster } from '../Card/CardMaster';

function MasterList() {
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    displayAllMasters()
      .then(data => setMasters(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Lista de Masters</h1>
      <ul>
        {masters && masters.map(master => (
          <CardMaster key={master.id} master={master} />
        ))}
      </ul>
    </div>
  );
}

export default MasterList;