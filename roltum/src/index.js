import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import CampaignList from './Components/CampaignList/CampaignList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/campaigns/:id" element={<CampaignList />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

