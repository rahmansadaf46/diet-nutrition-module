import React from "react";
import { Container, Typography } from "@mui/material";
import DietChart from "../components/DietChart";

const DietCharts: React.FC = () => {
    return (
        <Container>
            <Typography variant="h6" color="#037080"><b>Weekly Diet Chart</b></Typography>
            
            <DietChart />
        </Container>
    );
};

export default DietCharts;
