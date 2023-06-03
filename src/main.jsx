import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './common/Login.jsx';
import Home from './home/Home.jsx';
import CommodityManagement from "./common/CommodityManagement.jsx";
import TradeOrder from "./common/TradeOrder.jsx";
import UserManagement from "./common/UserManagement.jsx";
import MenuManagement from "./common/MenuManagement.jsx";
import RoleManagement from "./common/RoleManagement.jsx";
import CompanyManagement from "./common/CompanyManagement.jsx";
import SystemVariable from "./common/SystemVariable.jsx";
import SystemPermission from "./common/SystemPermission.jsx";
import MachineConfig from "./common/MachineConfig.jsx";
import PayConfig from "./common/PayConfig.jsx";
import Charts from "./common/Charts.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@arco-design/web-react/dist/css/arco.css";

function App() {

  return (
    <div>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} >
            <Route index element={<CommodityManagement />} />
            <Route path='commodityManagement' element={<CommodityManagement />} />
            
            <Route path='tradeOrder' element={<TradeOrder />} />
            <Route path='userManagement' element={<UserManagement />} />
            <Route path='menuManagement' element={<MenuManagement />} />
            <Route path='roleManagement' element={<RoleManagement />} />
            <Route path='companyManagement' element={<CompanyManagement />} />
            <Route path='systemVariable' element={<SystemVariable />} />
            <Route path='systemPermission' element={<SystemPermission />} />
            <Route path='machineConfig' element={<MachineConfig />} />
            <Route path='payConfig' element={<PayConfig />} />
            <Route path='charts' element={<Charts />} />
          </Route>
        </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

