import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ResourcePage from "./pages/ResourcePage";
import RoadmapPage from "./pages/RoadmapPage";
import MaterialPage from "./pages/MaterialPage";
import Roadmap_Grid from "./pages/Roadmap_Grid";
import YearPage from "./pages/YearPage";
import Notfound from "./pages/Notfound";
import GradePage from "./pages/GradePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<YearPage />} />
        <Route path="/resources/:year" element={<ResourcePage />} />
        <Route path="/gpa" element = {<GradePage/>}/>
        <Route path="/roadmaps" element={<Roadmap_Grid/>} />
        <Route path="/resources/materials" element={<MaterialPage />} />
        <Route path="/notfound" element={<Notfound/>} />
        <Route path="/roadmaps/:param" element={<RoadmapPage />} />
      </Routes>
    </div>
  );
};

export default App;
