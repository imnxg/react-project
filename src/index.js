import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WebTest from './WebTest';
import Login from './Login';
import Home from "./home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@arco-design/web-react/dist/css/arco.css";
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
    
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <App/>
  </React.StrictMode>
);


reportWebVitals();
