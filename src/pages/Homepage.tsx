import { AccountCircle, AdminPanelSettings, AssignmentInd, Diversity3, Face4, LocalHospital, LocalHotel, Man, Man4, MonitorHeart, People, PersonPin, Wc, Woman } from "@mui/icons-material";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Bar, BarChart, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import logo from '../assets/dashboard1.png';
import logo1 from '../assets/statisctics.png';


const patientData = [
    { name: "Total Patient", count: 150, icon: <People fontSize="large" color="info" />, color: "#E3F2FD", textColor: "info" },
    { name: "Total Online Appointments", count: 150, icon: <PersonPin fontSize="large" color="error" />, color: "#F3E5F5", textColor: "error" },
    { name: "Total OPD patient", count: 150, icon: <LocalHospital fontSize="large" color="warning" />, color: "#E8F5E9", textColor: "warning" },
    { name: "Total Emergency patient", count: 150, icon: <MonitorHeart fontSize="large" color="success" />, color: "#FFF8E1", textColor: "success" },
    { name: "Total IPD Patient", count: 50, icon: <LocalHotel fontSize="large" color="warning" />, color: "#E8F5E9", textColor: "warning" },
    { name: "Male", count: 80, icon: <Man fontSize="large" color="success" />, color: "#FFF8E1", textColor: "success" },
    { name: "Female", count: 60, icon: <Woman fontSize="large" color="secondary" />, color: "#E3F2FD", textColor: "secondary" },
    { name: "Other", count: 10, icon: <Man4 fontSize="large" color="action" />, color: "#F3E5F5", textColor: "action" },
    { name: "Government patient ", count: 80, icon: <AdminPanelSettings fontSize="large" color="secondary" />, color: "#E3F2FD", textColor: "secondary" },
    { name: "Non-Government patient", count: 60, icon: <AccountCircle fontSize="large" color="primary" />, color: "#E8F5E9", textColor: "primary" },
];
const liveCountData = [
    { name: "Officer", count: 150, icon: <AssignmentInd fontSize="large" color="info" />, color: "#E3F2FD", textColor: "info" },
    { name: "Doctor", count: 150, icon: <PersonPin fontSize="large" color="error" />, color: "#F3E5F5", textColor: "error" },
    { name: "Nurse", count: 150, icon: <Face4 fontSize="large" color="warning" />, color: "#E8F5E9", textColor: "warning" },
    { name: "Staff", count: 150, icon: <Wc fontSize="large" color="success" />, color: "#FFF8E1", textColor: "success" },
    { name: "Outsource", count: 50, icon: <Diversity3 fontSize="large" color="error" />, color: "#E8F5E9", textColor: "error" },
];

// const activePatientData = [
//     { name: "Active", value: 120 },
//     { name: "Inactive", value: 30 }
// ];

// const COLORS = ["#4CAF50", "#E57373"];



const departmentWiseData = [
    { department: "Hematology", "Government": 120, 'Non Government': 6 },
    { department: "Medicine", "Government": 150, 'Non Government': 5 },
    { department: "ENT", "Government": 90, 'Non Government': 10 },
    { department: "Cardiology", "Government": 130, 'Non Government': 7 },
    { department: "Dermatology", "Government": 100, 'Non Government': 3 },
    { department: "Orthopedics", "Government": 140, 'Non Government': 2 },
    { department: "Eye", "Government": 120, 'Non Government': 9 },

];
const doctorWiseData = [
    { name: "Dr. Mohammad Kamrul Hasan", value: 120 },
    { name: "Dr. Sonia Sharmin", value: 95 },
    { name: "Dr. Md. Saidul Anower", value: 110 },
    { name: "Dr. Ajmayeena Tajrian", value: 130 },
    { name: "Dr. Md. Sahidullah", value: 105 },
    { name: "Dr.Md.zia uddin", value: 115 },
];

const COLORS = ["#754E1A", "#A89C29", "#E82561", "#039990", "#D72638", "#3D348B"];
const consultedPatientData = [
    { department: "Hematology", "Government": 120, 'Non Government': 6 },
    { department: "Medicine", "Government": 150, 'Non Government': 5 },
    { department: "ENT", "Government": 90, 'Non Government': 10 },
    { department: "Cardiology", "Government": 130, 'Non Government': 7 },
    { department: "Dermatology", "Government": 100, 'Non Government': 3 },
    { department: "Orthopedics", "Government": 140, 'Non Government': 2 },
    { department: "Eye", "Government": 120, 'Non Government': 9 },
];

const pendingPatientData = [
    { department: "Hematology", pending: 40 },
    { department: "Medicine", pending: 50 },
    { department: "ENT", pending: 35 },
    { department: "Cardiology", pending: 60 },
    { department: "Dermatology", pending: 45 },
    { department: "Orthopedics", pending: 55 },
];

const opdPatientData = [
    { day: "Monday", patients: 180 },
    { day: "Tuesday", patients: 150 },
    { day: "Wednesday", patients: 200 },
    { day: "Thursday", patients: 210 },
    { day: "Friday", patients: 180 },
    { day: "Saturday", patients: 160 },
    { day: "Sunday", patients: 140 },
];
const Homepage: React.FC = () => {
    return (
        <>
            <Box sx={{ mt: -2, background: '#E3FCBB', width: '100%', height: '50px', textAlign: 'center', padding: '10px', borderRadius: '5px', transition: 'background 0.5s ease-in-out', '&:hover': { background: '#bdf661' } }}>
                <Typography color="primary" sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom>
                    <img style={{ width: '20px' }} src={logo1} /> Welcome to the <span style={{ fontWeight: 'bold', color: '#143E44' }}> <span style={{ color: '#DC014E' }}>SKH</span></span> Dashboard <img style={{ width: '20px' }} src={logo} />
                </Typography>
                {/* <Typography variant="body1">Manage your patients and their diet plans.</Typography> */}
            </Box>

            <Grid container spacing={2} sx={{ marginTop: 1, justifyContent: 'center' }}>
                {patientData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography
                    sx={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        // textAlign: 'center',
                        mt: 2,
                        mb: 1,
                        background: '#E3FCBB',
                        borderRadius: '5px',
                        width: '130px',
                        position: 'relative',
                        padding: '5px'
                    }}
                    color="#039990"
                    variant="h6"
                >
                    Total Live Count
                    <Box
                        sx={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: 'red',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: '50%',
                            right: '5px',
                            transform: 'translateY(-50%)',
                            animation: 'blink 1s infinite'
                        }}
                    />
                </Typography>

                {/* Keyframes for Blinking Effect */}
                <style>
                    {`
      @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
    `}
                </style>
            </Box>

            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                {liveCountData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
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
            <Grid container sx={{ justifyContent: 'center' }} spacing={2}>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }} color="warning" variant="h6">
                            Department-wise Patient Count
                        </Typography>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={departmentWiseData}>
                                <XAxis dataKey="department" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar barSize={50} dataKey="Government" stackId="a" fill="#FBA518" />
                                <Bar dataKey='Non Government' stackId="a" fill="#A89C29" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>

                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={6}>
                    <Box sx={{ marginTop: 4, textAlign: "center" }}>
                        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }} color="error" variant="h6">
                            Department-wise Consulted Patient
                        </Typography>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={consultedPatientData}>
                                <XAxis dataKey="department" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar barSize={50} dataKey="Government" stackId="a" fill="#73C7C7" />
                                <Bar dataKey='Non Government' stackId="a" fill="#6E8E59" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={12}>
                    <Box sx={{ marginTop: 4, textAlign: "center" }}>
                        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }} color="primary" variant="h6">
                            Doctor-wise Patient Distribution
                        </Typography>
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart>
                                <Pie
                                    data={doctorWiseData}
                                    cx="50%"
                                    cy="50%"
                                    // labelLine={false}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name }) => `${name}`}
                                >
                                    {doctorWiseData.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box sx={{ marginTop: 4, textAlign: "center" }}>
                        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }} color="error" variant="h6">
                            Department-wise Pending Patient
                        </Typography>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={pendingPatientData}>
                                <XAxis dataKey="department" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pending" stroke="#D72638" strokeWidth={2} dot={{ r: 5 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box sx={{ marginTop: 4, textAlign: "center" }}>
                        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }} color="primary" variant="h6">
                            OPD Patient Count (Weekly)
                        </Typography>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={opdPatientData}>
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="patients" fill="#344CB7" barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }} color="success" variant="h6">
                            Department-wise Referred Patient Count
                        </Typography>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={departmentWiseData}>
                                <XAxis dataKey="department" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar barSize={50} dataKey="Government" stackId="a" fill="#EB5A3C" />
                                <Bar dataKey="Non Government" stackId="a" fill="#C890A7" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
            </Grid>
            {/* <Grid container spacing={2}>
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


            </Grid> */}
        </>
    );
};

export default Homepage;
