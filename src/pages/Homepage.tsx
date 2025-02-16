/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccountCircle, AdminPanelSettings, AssignmentInd, Diversity3, Face4, LocalHospital, LocalHotel, Man, Man4, MonitorHeart, People, PersonPin, Wc, Woman } from "@mui/icons-material";
import { Box, Card, CardContent, Grid, MenuItem, Select, Typography } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import React, { useState } from "react";
import { Bar, BarChart, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import logo from '../assets/dashboard1.png';
import logo1 from '../assets/statisctics.png';


const patientData = [
    { name: "Total Patient", count: 150, icon: <People fontSize="large" color="info" />, color: "#E3F2FD", textColor: "info" },
    { name: "Total Online Appointments", count: 150, icon: <PersonPin fontSize="large" color="error" />, color: "#F3E5F5", textColor: "error" },
    { name: "Total OPD patient", count: 150, icon: <LocalHospital fontSize="large" color="warning" />, color: "#E8F5E9", textColor: "warning" },
    { name: "Total Emergency patient", count: 150, icon: <MonitorHeart fontSize="large" color="success" />, color: "#FFF8E1", textColor: "success" },
    { name: "Total IPD Patient", count: 50, icon: <LocalHotel fontSize="large" color="warning" />, color: "#E8F5E9", textColor: "warning" },
    { name: "Male", count: 80, icon: <Man fontSize="large" color="success" />, color: "#FFF8E1", textColor: "success" },
    { name: "Female", count: 60, icon: <Woman fontSize="large" color="warning" />, color: "#E3F2FD", textColor: "warning" },
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

const departmentData = [
    {
        department: "Hematology",
        rooms: [
            { room: "Room 1", Government: 40, "Non Government": 2 },
            { room: "Room 2", Government: 50, "Non Government": 3 },
            { room: "Room 3", Government: 30, "Non Government": 1 },
        ],
    },
    {
        department: "Medicine",
        rooms: [
            { room: "Room 1", Government: 60, "Non Government": 2 },
            { room: "Room 2", Government: 70, "Non Government": 3 },
            { room: "Room 3", Government: 20, "Non Government": 0 },
        ],
    },
    {
        department: "ENT",
        rooms: [
            { room: "Room 1", Government: 40, "Non Government": 5 },
            { room: "Room 2", Government: 30, "Non Government": 3 },
            { room: "Room 3", Government: 20, "Non Government": 2 },
        ],
    },
    {
        department: "Cardiology",
        rooms: [
            { room: "Room 1", Government: 50, "Non Government": 2 },
            { room: "Room 2", Government: 50, "Non Government": 3 },
            { room: "Room 3", Government: 30, "Non Government": 2 },
        ],
    },
];


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




// Calculate percentage for each data item

const registrationData = [
    { label: "Service Received", value: 300, color: "#859F3D" }, // Green
    { label: "Service Not Received", value: 120, color: "#D76C82" }, // Red
];

const pharmacyData = [
    { label: "Complete", value: 500, color: "#15B392" }, // Green
    { label: "Queue", value: 200, color: "#FF4545" }, // Red

];

const labData = [
    { label: "Complete", value: 241, color: "#229799" }, // Green
    { label: "Queue", value: 142, color: "#F87A53" }, // Red

];

const radiologyData = [
    { label: "Complete", value: 142, color: "#6A9C89" }, // Green
    { label: "Queue", value: 57, color: "#DE7C7D" }, // Red
];

// Function to calculate percentage and update the data array
const calculatePercentageData = (data: any[]) => {
    return data.map(item => ({
        ...item,
        count: ((item.value / (data.reduce((sum, item) => sum + item.value, 0))) * 100).toFixed(2), // Calculate percentage
    }));
};

// Calculate percentage for each data item
const regData = calculatePercentageData(registrationData)
const pharmacyRegData = calculatePercentageData(pharmacyData);
const labRegData = calculatePercentageData(labData);
const radiologyRegData = calculatePercentageData(radiologyData);

const Homepage: React.FC = () => {
    const [selectedDepartment, setSelectedDepartment] = useState(departmentData[0].department);

    // Get room-wise data based on the selected department
    const roomData = departmentData.find((dept) => dept.department === selectedDepartment)?.rooms || [];


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
                    <Box sx={{ marginTop: 4, textAlign: "center" }}>
                        <Typography sx={{ fontSize: "14px", fontWeight: "bold", }} color="warning" variant="h6">
                            Department-wise Room Patient Count
                        </Typography>
                        {/* Dropdown for Department Selection */}
                        <Box sx={{textAlign:'right'}}>
                            <Select
                                value={selectedDepartment}
                                onChange={(e) => setSelectedDepartment(e.target.value)}
                                sx={{ marginBottom: 3, background: "white", minWidth: 100 }}
                                size="small"
                            >
                                {departmentData.map((dept) => (
                                    <MenuItem key={dept.department} value={dept.department}>
                                        {dept.department}
                                    </MenuItem>
                                ))}
                            </Select>

                        </Box>
                        {/* Room-wise Bar Chart */}
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={roomData}>
                                <XAxis dataKey="room" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar barSize={50} dataKey="Government" stackId="a" fill="#FBA518" />
                                <Bar dataKey="Non Government" stackId="a" fill="#A89C29" />
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
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box sx={{ marginTop: 4, textAlign: "center", border: '2px solid #8D0B41', borderRadius: '20px', pb: 2 }}>
                        <Typography sx={{ fontSize: "14px", fontWeight: "bold", mt: 2 }} color="#8D0B41" variant="h6">
                            Registration-wise Patient Distribution
                        </Typography>
                        <PieChart
                            height={292}
                            legend={{ hidden: true }}
                            sx={{ ms: 1, fontWeight: 'bold', position: 'relative', left: '45px' }}
                            series={[
                                {
                                    arcLabel: (item: any) => `${item.count}%`, // Show percentage
                                    arcLabelMinAngle: 35, // Minimum angle for labels
                                    arcLabelRadius: '60%', // Set the radius of the arc label
                                    data: regData, // Use the data with percentage values
                                },
                            ]}

                        />
                        <Box sx={{ mt: 1, fontSize: "14px", fontWeight: 'bold', justifyContent: 'center' }}>
                            {regData.map((item: any, index: number) => (
                                <Box key={index} sx={{ display: "flex", justifyContent: "center", marginBottom: 1 }}>
                                    <Box sx={{ width: "10px", height: "10px", backgroundColor: item.color, marginTop: 0.55, marginRight: 0.7, borderRadius: '50px', }}></Box>
                                    <Typography sx={{ fontSize: "14px", color: item.color }}>
                                        {item.label}: <b>{item.value}</b>
                                    </Typography>
                                </Box>
                            ))}

                        </Box>
                        <Box sx={{ marginTop: 1, fontSize: "18px", color: "#8D0B41" }}>
                            Total: <b>{regData.reduce((sum, item) => sum + item.value, 0)}</b>
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box sx={{ marginTop: 4, textAlign: "center", border: '2px solid #3D5300', borderRadius: '20px', pb: 2 }}>
                        <Typography sx={{ fontSize: "14px", fontWeight: "bold", mt: 1 }} color="#3D5300" variant="h6">
                            Pharmacy-wise Queue and Complete
                        </Typography>
                        <PieChart
                            height={300}
                            legend={{ hidden: true }}
                            sx={{ ms: 1, fontWeight: 'bold', position: 'relative', left: '45px' }}
                            series={[
                                {
                                    arcLabel: (item: any) => `${item.count}%`, // Show percentage
                                    arcLabelMinAngle: 35, // Minimum angle for labels
                                    arcLabelRadius: '60%', // Set the radius of the arc label
                                    data: pharmacyRegData, // Use the data with percentage values
                                },
                            ]}
                        />
                        <Box sx={{ mt: 1, fontSize: "14px", fontWeight: 'bold', justifyContent: 'center' }}>
                            {pharmacyRegData.map((item: any, index: number) => (
                                <Box key={index} sx={{ display: "flex", justifyContent: "center", marginBottom: 1 }}>
                                    <Box sx={{ width: "10px", height: "10px", backgroundColor: item.color, marginTop: 0.55, marginRight: 0.7, borderRadius: '50px', }}></Box>
                                    <Typography sx={{ fontSize: "14px", color: item.color }}>
                                        {item.label}: <b>{item.value}</b>
                                    </Typography>
                                </Box>
                            ))}

                        </Box>
                        <Box sx={{ marginTop: 1, fontSize: "18px", color: "#3D5300" }}>
                            Total: <b>{pharmacyRegData.reduce((sum, item) => sum + item.value, 0)}</b>
                        </Box>
                    </Box>
                </Grid>

                {/* Lab Pie Chart */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box sx={{ marginTop: 4, textAlign: "center", border: '2px solid #3B1E54', borderRadius: '20px', pb: 2 }}>
                        <Typography sx={{ fontSize: "14px", fontWeight: "bold", mt: 1 }} color="#3B1E54" variant="h6">
                            Lab-wise Queue and Complete
                        </Typography>
                        <PieChart
                            height={300}
                            legend={{ hidden: true }}
                            sx={{ ms: 1, fontWeight: 'bold', position: 'relative', left: '45px' }}
                            series={[
                                {
                                    arcLabel: (item: any) => `${item.count}%`, // Show percentage
                                    arcLabelMinAngle: 35, // Minimum angle for labels
                                    arcLabelRadius: '60%', // Set the radius of the arc label
                                    data: labRegData, // Use the data with percentage values
                                },
                            ]}
                        />
                        <Box sx={{ mt: 1, fontSize: "14px", fontWeight: 'bold', justifyContent: 'center' }}>
                            {labRegData.map((item: any, index: number) => (
                                <Box key={index} sx={{ display: "flex", justifyContent: "center", marginBottom: 1 }}>
                                    <Box sx={{ width: "10px", height: "10px", backgroundColor: item.color, marginTop: 0.55, marginRight: 0.7, borderRadius: '50px', }}></Box>
                                    <Typography sx={{ fontSize: "14px", color: item.color }}>
                                        {item.label}: <b>{item.value}</b>
                                    </Typography>
                                </Box>
                            ))}

                        </Box>
                        <Box sx={{ marginTop: 1, fontSize: "18px", color: "#3B1E54" }}>
                            Total: <b>{labRegData.reduce((sum, item) => sum + item.value, 0)}</b>
                        </Box>
                    </Box>
                </Grid>

                {/* Radiology Pie Chart */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box sx={{ marginTop: 4, textAlign: "center", border: '2px solid #536493', borderRadius: '20px', pb: 2 }}>
                        <Typography sx={{ fontSize: "14px", fontWeight: "bold", mt: 1 }} color="#536493" variant="h6">
                            Radiology-wise Queue and Complete
                        </Typography>
                        <PieChart
                            height={300}
                            legend={{ hidden: true }}
                            sx={{ ms: 1, fontWeight: 'bold', position: 'relative', left: '45px' }}
                            series={[
                                {
                                    arcLabel: (item: any) => `${item.count}%`, // Show percentage
                                    arcLabelMinAngle: 35, // Minimum angle for labels
                                    arcLabelRadius: '60%', // Set the radius of the arc label
                                    data: radiologyRegData, // Use the data with percentage values
                                },
                            ]}
                        />
                        <Box sx={{ mt: 1, fontSize: "14px", fontWeight: 'bold', justifyContent: 'center' }}>
                            {radiologyRegData.map((item: any, index: number) => (
                                <Box key={index} sx={{ display: "flex", justifyContent: "center", marginBottom: 1 }}>
                                    <Box sx={{ width: "10px", height: "10px", backgroundColor: item.color, marginTop: 0.55, marginRight: 0.7, borderRadius: '50px', }}></Box>
                                    <Typography sx={{ fontSize: "14px", color: item.color }}>
                                        {item.label}: <b>{item.value}</b>
                                    </Typography>
                                </Box>
                            ))}

                        </Box>
                        <Box sx={{ marginTop: 1, fontSize: "18px", color: "#536493" }}>
                            Total: <b>{radiologyRegData.reduce((sum, item) => sum + item.value, 0)}</b>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={12}>
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
