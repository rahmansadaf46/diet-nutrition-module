import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Box sx={{background:'#E0F7FA', width:'45%', padding:'20px', borderRadius:'5px',  transition: 'background 0.5s ease-in-out',
                    '&:hover': {
                        background: '#B2EBF2',
                    }}}>
                <Typography variant="h5" gutterBottom>Welcome to the <span style={{ fontWeight: 'bold', color: '#143E44' }}>NutriHealth</span> Dashboard</Typography>
                <Typography variant="body1">Manage your patients and their diet plans.</Typography>

            </Box>
        </Container>
    );
};

export default Dashboard;
