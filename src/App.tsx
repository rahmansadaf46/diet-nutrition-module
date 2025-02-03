import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import DietCharts from "./pages/DietCharts";
import TemplateCreator from "./pages/TemplateCreator";
import NutritionalAssessmentForm from "./pages/NutritionalAssessmentForm";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt:9 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/patients" element={<Patients />} />
            <Route path="/diet-charts" element={<DietCharts />} />
            <Route path="/template-creator" element={<TemplateCreator />} />
            <Route path="/nutritional-assessment" element={<NutritionalAssessmentForm />} />

          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
