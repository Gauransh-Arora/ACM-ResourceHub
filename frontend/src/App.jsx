import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ResourcePage from "./pages/ResourcePage";
import RoadmapPage from "./pages/RoadmapPage";
import MaterialPage from "./pages/MaterialPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/resources" element={<ResourcePage/>} />
        <Route path="/roadmaps" element={<RoadmapPage/>} />
        <Route path="/resources/materials" element={<MaterialPage />} />
      </Routes>
    </div>
  );
};

export default App;
