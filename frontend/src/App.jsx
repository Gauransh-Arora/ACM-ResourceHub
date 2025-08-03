import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ResourcePage from "./pages/ResourcePage";
import RoadmapPage from "./pages/RoadmapPage";
import MaterialPage from "./pages/MaterialPage";
import Roadmap_Grid from "./pages/Roadmap_Grid";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources/:year" element={<ResourcePage />} />
        <Route path="/roadmaps" element={<Roadmap_Grid/>} />
        <Route path="/resources/materials" element={<MaterialPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
      </Routes>
    </div>
  );
};

export default App;
