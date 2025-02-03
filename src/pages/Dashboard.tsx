import React from "react";
import { Container, Typography } from "@mui/material";

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Typography variant="h5" gutterBottom>Welcome to the Diet & Nutrition Module Dashboard</Typography>
            <Typography variant="body1">Manage your patients and their diet plans.</Typography>
        </Container>
    );
};

export default Dashboard;
