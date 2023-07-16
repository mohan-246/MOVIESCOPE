import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card } from "./components/Card.jsx";
import { More } from "./components/More.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Details/:id" element={<Card />} />
      <Route path="More/:topic" element={<More />}/>
    </Routes>
  </BrowserRouter>
  //</React.StrictMode>,
);
