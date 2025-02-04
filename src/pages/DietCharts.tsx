import React from "react";
import { Container, Typography } from "@mui/material";
import DietChart from "../components/DietChart";

const DietCharts: React.FC = () => {
    return (
        <Container>
            <Typography variant="h6" color="#037080" sx={{mb:3}}><b>Diet Charts</b></Typography>
            
            <DietChart />
        </Container>
    );
};

export default DietCharts;
