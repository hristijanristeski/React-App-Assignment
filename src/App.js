import React from "react";
import "./App.css";
import MissionsList from "./components/MissionsList";
import { Route, Routes } from "react-router-dom";
import RocketDetails from "./components/RocketDetails";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<MissionsList />} />
      <Route path="/mission/:rocketName" element={<RocketDetails />} />
    </Routes>
  );
}

export default App;
