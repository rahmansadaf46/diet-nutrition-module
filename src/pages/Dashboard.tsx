import { EventAvailable, Face, Man, Man4, People, Woman } from "@mui/icons-material";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Bar, BarChart, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import logo1 from '../assets/heart.png';
import logo from '../assets/love.png';


const patientData = [
    { name: "Total Patients", count: 150, icon: <People fontSize="large" color="primary" />, color: "#E3F2FD", textColor: "primary" },
    { name: "My Patients", count: 50, icon: <Face fontSize="large" color="secondary" />, color: "#FCE4EC", textColor: "secondary" },
    { name: "Today's Patients", count: 20, icon: <EventAvailable fontSize="large" color="success" />, color: "#E0F2F1", textColor: "success" },
    { name: "Male", count: 80, icon: <Man fontSize="large" color="primary" />, color: "#E8F5E9", textColor: "primary" },
    { name: "Female", count: 60, icon: <Woman fontSize="large" color="secondary" />, color: "#FFF8E1", textColor: "secondary" },
    { name: "Other", count: 10, icon: <Man4 fontSize="large" color="action" />, color: "#F3E5F5", textColor: "action" }
];

const monthlyPatientData = [
    { month: "Jan", Patient: 30 },
    { month: "Feb", Patient: 40 },
    { month: "Mar", Patient: 35 },
    { month: "Apr", Patient: 50 },
    { month: "May", Patient: 55 },
    { month: "Jun", Patient: 60 },
    { month: "Jul", Patient: 65 },
    { month: "Aug", Patient: 70 },
    { month: "Sep", Patient: 75 },
    { month: "Oct", Patient: 80 },
    { month: "Nov", Patient: 85 },
    { month: "Dec", Patient: 90 }
];

// const activePatientData = [
//     { name: "Active", value: 120 },
//     { name: "Inactive", value: 30 }
// ];

// const COLORS = ["#4CAF50", "#E57373"];
const genderData = [
    { gender: "Male", value: 120 },
    { gender: "Female", value: 150 },
    { gender: "Other", value: 30 }
];

const bmiData = [
    { category: "Underweight", count: 15 },
    { category: "Normal", count: 50 },
    { category: "Overweight", count: 20 },
    { category: "Obese", count: 10 },
];

const visitFrequencyData = [
    { month: "Jan", visits: 150 },
    { month: "Feb", visits: 180 },
    { month: "Mar", visits: 200 },
    { month: "Apr", visits: 220 },
    { month: "May", visits: 250 },
    { month: "Jun", visits: 270 },
    { month: "Jul", visits: 300 }
];

const recoveryData = [
    { status: "Recovering", male: 60, female: 70, other: 10 },
    { status: "Stable", male: 120, female: 110, other: 10 },
    { status: "Critical", male: 30, female: 40, other: 10 }
];

const chronicDiseaseData = [
    { disease: "Hypertension", male: 50, female: 60, other: 10 },
    { disease: "Diabetes", male: 40, female: 35, other: 10 },
    { disease: "Asthma", male: 30, female: 40, other: 10 }
];

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Box sx={{ mt: -2, background: '#E0F7FA', width: '100%', height: '50px', textAlign: 'center', padding: '10px', borderRadius: '5px', transition: 'background 0.5s ease-in-out', '&:hover': { background: '#B2EBF2' } }}>
                <Typography color="primary" sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom>
                    <img style={{ width: '20px' }} src={logo1} /> Welcome to the <span style={{ fontWeight: 'bold', color: '#143E44' }}>NutriHealth</span> Dashboard <img style={{ width: '20px' }} src={logo} />
                </Typography>
                {/* <Typography variant="body1">Manage your patients and their diet plans.</Typography> */}
            </Box>

            <Grid container spacing={2} sx={{ marginTop: 1 }}>
                {patientData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                        <Card sx={{ background: item.color, height: '70px' }}>
                            <CardContent sx={{ mt: -1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'start', mt: 1 }}>
                                        {item.icon}
                                    </Box>
                                    <Box sx={{ textAlign: 'right', width: '100%' }}>
                                        <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{item.name}</Typography>
                                        <Typography variant="h5" color={item.textColor}><b>{item.count}</b></Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }} color="primary" variant="h6">Patient Count by Month</Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={monthlyPatientData}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Patient" fill="#574964" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6}>
                    <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }} color="warning" >Gender wise Patient</Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={genderData}
                                    dataKey="value"
                                    nameKey="gender"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="#8884d8"
                                    label
                                >
                                    <Cell key="male" fill="#007BFF" />
                                    <Cell key="female" fill="#FF69B4" />
                                    <Cell key="other" fill="#FFD700" />
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }} color="primary" variant="h6">Monthly Growth of Patients</Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie data={bmiData} dataKey="count" nameKey="category" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label>
                                        <Cell key="underweight" fill="#3B6790" />
                                        <Cell key="normal" fill="#EFB036" />
                                        <Cell key="overweight" fill="#23486A" />
                                        <Cell key="obese" fill="#4C7B8B" />
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>

                        </ResponsiveContainer>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }} color="primary" variant="h6">Patient Visit Frequency</Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={visitFrequencyData}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="visits" stroke="#42A5F5" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }} color="primary" variant="h6">Patient Recovery Status</Typography>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={recoveryData}>
                                <XAxis dataKey="status" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="male" stackId="a" fill="#A19AD3" />
                                <Bar dataKey="female" stackId="a" fill="#A1D6CB" />
                                <Bar dataKey="other" stackId="a" fill="#FAC67A" />

                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }} color="primary" variant="h6">Chronic Disease Prevalence</Typography>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={chronicDiseaseData}>
                                <XAxis dataKey="disease" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="male" stackId="a" fill="#FBA518" />
                                <Bar dataKey="female" stackId="a" fill="#A89C29" />
                                <Bar dataKey="other" stackId="a" fill="#F9CB43" />

                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>


            </Grid>
        </Container>
    );
};

export default Dashboard;
