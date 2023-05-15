import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MenuACM from './Pages/MenuACM/MenuACM';
import MenuINQT from './Pages/MenuINQT/MenuINQT';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CampaignList from './Components/Campaign/CampaignList';
import { AdventurerList } from './Components/Adventurer/ShowAdventurerList';
import { AdventurerSheet } from './Components/Adventurer/ShowAdventurerDetails';
import Register from './Components/Form/Register';
import ShowMonsterList from './Components/Monster/ShowMonster';
import { InsertAdventurer } from './Components/Form/Character/AdventurerForm';
import ShowNpcList from './Components/Npc/ShowNpc';
import { ShowQuestList } from './Components/Quest/ShowQuest';
import { ShowTownList } from './Components/Town/ShowTown';
import { ShowItemList } from './Components/Item/ShowItem';
import { InsertCampaign } from './Components/Form/Campaign/CampaignForm';
import { InsertNpc } from './Components/Form/Npc/NpcForm';
import { InsertQuest } from './Components/Form/Quest/QuestForm';
import { InsertTown } from './Components/Form/Town/TownForm';
import { InsertItem } from './Components/Form/Item/ItemForm';
import { InsertMonster } from './Components/Form/Monster/MonsterForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Login and register */}
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        {/* Menu */}
        <Route path="/menu-acm" element={<MenuACM />} />
        <Route path="/menuinqt/:userId/:campaignId" element={<MenuINQT />} />
        {/* Show data */}
        <Route path="/campaigns/:userId" element={<CampaignList />} />
        <Route path="/adventurers/:userId" element={<AdventurerList />} />
        <Route path="/selectedadventurer/:userId/:adventurerId" element={<AdventurerSheet />} />
        <Route path="npcs/:userId/:campaignId" element={<ShowNpcList />} />
        <Route path="quests/:userId/:campaignId" element={<ShowQuestList />} />
        <Route path="towns/:userId/:campaignId" element={<ShowTownList />} />
        <Route path="items/:userId/:campaignId" element={<ShowItemList />} />
        <Route path="/monsters/:userId" element={<ShowMonsterList />} />
        {/* Insert data */}
        <Route path="/addAdventurers/:userId" element={<InsertAdventurer />} />
        <Route path="/addNpcs/:userId/:campaignId" element={<InsertNpc />} />
        <Route path="/addQuests/:userId/:campaignId" element={<InsertQuest />} />
        <Route path="/addTowns/:userId/:campaignId" element={<InsertTown />} />
        <Route path="/addMonsters/:userId" element={<InsertMonster />} />
        <Route path="/addItems/:userId/:campaignId" element={<InsertItem />} />
        <Route path="/addCampaigns/:userId" element={< InsertCampaign />} />
        {/* Update data */}
        {/* <Route path="/update-campaign/:userId/:campaignId" element={<CampaignUpdateForm />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
