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
import logo from './assets/logo-removebg.png'
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{
          flexGrow: 1,
          p: 3,
          mt: 9,
          position: "relative",
          "&::after": {
            content: '""',
            position: "fixed",
            bottom: 0,
            right: 0,
            width: "200px", // Adjust size as needed
            height: "200px",
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: 0.1, // Adjust shadow effect
            pointerEvents: "none",
          }, }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/patients" element={<Patients />} />
            <Route path="/diet-charts" element={<DietCharts />} />
            <Route path="/template-creator" element={<TemplateCreator />} />
            <Route path="/nutritional-assessment" element={<NutritionalAssessmentForm />} />

          </Routes>
          {/* <footer style={{textAlign:'center', marginTop:'120px'}}><small>Technical Assistance by: <b>Crystal Technology Bangladesh Ltd.</b></small></footer> */}
        </Box>
      </Box>
    </Router>
  );
};

export default App;
