import React, { useState, useEffect } from 'react';
import { displayAllMasters } from '../../Services/MasterApi';

function MasterList() {
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    displayAllMasters()
      .then(data => setMasters(data))
      .catch(error => console.log(error));
  }, []);
  console.log("masters:", masters);
  return (
    <div>
      <h1>Lista de Masters</h1>
      <ul>
        {masters && masters.map(master => (
          <li key={master.id}>{master.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MasterList;
