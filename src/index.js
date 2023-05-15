import React,{useState,useEffect, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import WebTest from './WebTest';
import Login from './common/Login';
import Home from './home/Home';
import CommodityManagement from "./common/CommodityManagement";
import CommodityManagementChange from "./common/CommodityManageChange";
import TradeOrder from './common/TradeOrder';
import UserManager from './common/UserManager';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@arco-design/web-react/dist/css/arco.css";

import reportWebVitals from './reportWebVitals';


function App() {
  const myRef  = useRef(null);
  
  return (
    <div className="backgeoundText" ref={myRef}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="home" element={<Home />} >
            <Route index element={<CommodityManagement />} />
            <Route path='commodityManagement' element={<CommodityManagement />} />
            <Route path='commodityManagementChange' element={<CommodityManagementChange />} />
            <Route path='tradeOrder' element={<TradeOrder />} />
            <Route path='userManager' element={<UserManager />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
