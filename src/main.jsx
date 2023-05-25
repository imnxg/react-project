import React,{useState,useEffect, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './common/Login.jsx';
import Home from './home/Home.jsx';
import CommodityManagement from "./common/CommodityManagement.jsx";
import TradeOrder from "./common/TradeOrder.jsx";
import UserManagement from "./common/UserManagement.jsx";
import MenuManagement from "./common/MenuManagement.jsx";
import RoleManagement from "./common/RoleManagement.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@arco-design/web-react/dist/css/arco.css";

function App() {
  const myRef  = useRef(null);
  
  return (
    <>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} >
            <Route index element={<CommodityManagement />} />
            <Route path='commodityManagement' element={<CommodityManagement />} />
            
            <Route path='tradeOrder' element={<TradeOrder />} />
            <Route path='userManagement' element={<UserManagement />} />
            <Route path='menuManagement' element={<MenuManagement />} />
            <Route path='roleManagement' element={<RoleManagement />} />
          </Route>
        </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

