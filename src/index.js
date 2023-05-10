import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WebTest from './WebTest';
import Login from './Login';
import Home from "./home/Home";
import CommodityManagement from "./common/CommodityManagement";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@arco-design/web-react/dist/css/arco.css";
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div class="backgeoundText">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/commodityManagement" element={<CommodityManagement />} />
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
