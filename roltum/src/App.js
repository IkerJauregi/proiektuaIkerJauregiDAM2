import React from 'react';
import MasterList from './Components/MasterList/MasterList';
import HeaderMenu from './Components/Layout/Layout';
import CampaignList from './Components/CampaignList/CampaignList';
function App() {
  return (
    <div>
        <HeaderMenu/>
        <MasterList/>
    </div>
  );
}

export default App;
