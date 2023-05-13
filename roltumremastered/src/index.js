import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MenuACM from './Pages/MenuACM/MenuACM';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CampaignList from './Components/Campaign/CampaignList';
import { AdventurerList } from './Components/Adventurer/ShowAdventurerList';
import Register from './Components/Form/Register';
import { CampaignUpdateForm } from './Components/Form/CampaignForm';
import ShowMonsterList from './Components/Monster/ShowMonster';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu-acm" element={<MenuACM />} />
        <Route path="/campaigns/:userId" element={<CampaignList />} />
        <Route path="/adventurers/:userId" element={<AdventurerList />} />
        <Route path="/monsters/:userId" element={<ShowMonsterList />} />
        <Route path="/update-campaign/:userId/:campaignId" element={<CampaignUpdateForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
