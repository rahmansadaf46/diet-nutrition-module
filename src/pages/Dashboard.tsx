import { EventAvailable, Face, Man, Man4, People, Woman } from "@mui/icons-material";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const patientData = [
    { name: "Total Patients", count: 150, icon: <People fontSize="large" color="primary" />, color: "#E3F2FD", textColor: "primary" },
    { name: "My Patients", count: 50, icon: <Face fontSize="large" color="secondary" />, color: "#FCE4EC", textColor: "secondary" },
    { name: "Today's Patients", count: 20, icon: <EventAvailable fontSize="large" color="success" />, color: "#E0F2F1", textColor: "success" },
    { name: "Male", count: 80, icon: <Man fontSize="large" color="primary" />, color: "#E8F5E9", textColor: "primary" },
    { name: "Female", count: 60, icon: <Woman fontSize="large" color="secondary" />, color: "#FFF8E1", textColor: "secondary" },
    { name: "Other", count: 10, icon: <Man4 fontSize="large" color="action" />, color: "#F3E5F5", textColor: "action" }
];

const monthlyPatientData = [
    { month: "Jan", count: 30 },
    { month: "Feb", count: 40 },
    { month: "Mar", count: 35 },
    { month: "Apr", count: 50 },
    { month: "May", count: 55 },
    { month: "Jun", count: 60 },
    { month: "Jul", count: 65 },
    { month: "Aug", count: 70 },
    { month: "Sep", count: 75 },
    { month: "Oct", count: 80 },
    { month: "Nov", count: 85 },
    { month: "Dec", count: 90 }
];

// const activePatientData = [
//     { name: "Active", value: 120 },
//     { name: "Inactive", value: 30 }
// ];

// const COLORS = ["#4CAF50", "#E57373"];

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Box sx={{ background: '#E0F7FA', width: '100%', padding: '20px', borderRadius: '5px', transition: 'background 0.5s ease-in-out', '&:hover': { background: '#B2EBF2' } }}>
                <Typography variant="h5" gutterBottom>
                    Welcome to the <span style={{ fontWeight: 'bold', color: '#143E44' }}>NutriHealth</span> Dashboard
                </Typography>
                <Typography variant="body1">Manage your patients and their diet plans.</Typography>
            </Box>

            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                {patientData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <Card sx={{ background: item.color, height:'70px' }}>
                            <CardContent sx={{mt:-1}}>
                                <Box sx={{display:'flex', justifyContent:'start'}}>
                                    <Box sx={{display:'flex', justifyContent:'start', mt:1}}>
                                        {item.icon}
                                    </Box>
                                    <Box sx={{textAlign:'right', width:'100%'}}>
                                        <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{item.name}</Typography>
                                        <Typography variant="h5" color={item.textColor}><b>{item.count}</b></Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6" gutterBottom>Patient Count by Month</Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyPatientData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#037080" />
                    </BarChart>
                </ResponsiveContainer>
            </Box>

        </Container>
    );
};

export default Dashboard;
