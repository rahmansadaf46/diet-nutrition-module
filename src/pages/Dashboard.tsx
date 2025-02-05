import { EventAvailable, People, Person, PersonAdd } from "@mui/icons-material";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const patientData = [
    { name: "Total Patients", count: 150, icon: <People fontSize="large" color="primary" />, color: "#E3F2FD" },
    { name: "My Patients", count: 50, icon: <Person fontSize="large" color="secondary" />, color: "#FCE4EC" },
    { name: "Male", count: 80, icon: <Person fontSize="large" color="primary" />, color: "#E8F5E9" },
    { name: "Female", count: 60, icon: <Person fontSize="large" color="secondary" />, color: "#FFF8E1" },
    { name: "Other", count: 10, icon: <PersonAdd fontSize="large" color="action" />, color: "#F3E5F5" },
    { name: "Today's Patients", count: 20, icon: <EventAvailable fontSize="large" color="success" />, color: "#E0F2F1" }
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
            <Box sx={{ background: '#E0F7FA', width: '100%', padding: '20px', borderRadius: '5px', transition: 'background 0.5s ease-in-out', '&:hover': { background: '#B2EBF2' }}}>
                <Typography variant="h5" gutterBottom>
                    Welcome to the <span style={{ fontWeight: 'bold', color: '#143E44' }}>NutriHealth</span> Dashboard
                </Typography>
                <Typography variant="body1">Manage your patients and their diet plans.</Typography>
            </Box>

            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                {patientData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                        <Card sx={{ textAlign: 'center', padding: '10px', background: item.color, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '120px' }}>
                            <CardContent sx={{pt:3}}>
                                {item.icon}
                                <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold', marginTop: '5px' }}>{item.name}</Typography>
                                <Typography variant="h5" color="textPrimary">{item.count}</Typography>
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
