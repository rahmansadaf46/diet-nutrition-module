import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import PatientDetailsData from "../components/PatientDetailsData";

const patientData = {
    name: "John Doe",
    age: 30,
    bmi: 24.5,
    calories: { actual: 2100, recommended: 2200 },
    waterIntake: [8, 7, 6, 9, 5, 10, 8], // glasses per day
    macronutrients: [
        { nutrient: "Carbs", value: 50 },
        { nutrient: "Protein", value: 30 },
        { nutrient: "Fats", value: 20 },
    ],
};

const calorieData = [
    { day: "Mon", actual: 1800, recommended: 2200 },
    { day: "Tue", actual: 2100, recommended: 2200 },
    { day: "Wed", actual: 2000, recommended: 2200 },
    { day: "Thu", actual: 2300, recommended: 2200 },
    { day: "Fri", actual: 1900, recommended: 2200 },
];

const waterData = [
    { day: "Mon", intake: 8 },
    { day: "Tue", intake: 7 },
    { day: "Wed", intake: 6 },
    { day: "Thu", intake: 9 },
    { day: "Fri", intake: 5 },
    { day: "Sat", intake: 10 },
    { day: "Sun", intake: 8 },
];
const weightBmiData = [
    { month: "Jan", weight: 70, bmi: 22 },
    { month: "Feb", weight: 71, bmi: 22.5 },
    { month: "Mar", weight: 72, bmi: 23 },
    { month: "Apr", weight: 73, bmi: 23.5 },
];
const COLORS = ["#FFBB28", "#FF8042", "#0088FE"];

const PatientProfile = () => {
    const navigate = useNavigate();

    return (
        <>
            <Typography variant="h6" color="#037080"><b>Patient Profile</b></Typography>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <Button onClick={() => navigate("/diet-charts")}
                    sx={{ mr: 1, fontWeight: 'bold' }} variant="contained" color="warning">Diet Planning</Button>
                <Button onClick={() => navigate("/nutritional-assessment")} sx={{ fontWeight: 'bold' }} variant="contained" color="success">Nutritional Assessment</Button>

            </Box>
            <Grid container spacing={3} p={3}>
                {/* Patient Info Table */}
                <Grid item xs={12} md={6}>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {patientData && [
                                    { label: "Name", value: patientData.name },
                                    { label: "Age", value: patientData.age },
                                    { label: "BMI", value: patientData.bmi },
                                    { label: "Daily Caloric Intake", value: `${patientData.calories.actual} kcal` },
                                    { label: "Recommended Intake", value: `${patientData.calories.recommended} kcal` }
                                ].map((row, index) => (
                                    <TableRow key={index} sx={{ backgroundColor: index % 2 !== 0 ? '#F3F3E0' : '#FBF8EF' }}>
                                        <TableCell>{row.label}</TableCell>
                                        <TableCell>{row.value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
                <Grid item xs={12} md={6}>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {[
                                    { label: "Height", value: 65 },
                                    { label: "Weight", value: 55 },
                                    { label: "Diagnosis", value: "N/A" },
                                    { label: "IBW", value: `${patientData.calories.recommended} kcal` },
                                    { label: "Status", value: "Active" }
                                ].map((row, index) => (
                                    <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#F3F3E0' : '#FBF8EF' }}>
                                        <TableCell>{row.label}</TableCell>
                                        <TableCell>{row.value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>

                {/* Caloric Intake Line Chart */}
                <Grid sx={{ marginTop: 4, textAlign: 'center' }} item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }} color="info" >Caloric Intake vs Recommended</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={calorieData}>
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual Intake" />
                            <Line type="monotone" dataKey="recommended" stroke="#82ca9d" name="Recommended Intake" />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>

                {/* Macronutrient Breakdown Pie Chart */}
                <Grid sx={{ marginTop: 4, textAlign: 'center' }} item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }} color="success" >Macronutrient Breakdown</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={patientData.macronutrients} dataKey="value" nameKey="nutrient" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                                {patientData.macronutrients.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </Grid>
                <PatientDetailsData />
                {/* Water Intake Bar Chart */}
                <Grid sx={{ marginTop: 4, textAlign: 'center' }} item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }} color="dark" >Water Intake Over the Week</Typography>

                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={waterData}>
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="intake" fill="#037080" />
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
                {/* Water Intake Bar Chart */}
                <Grid sx={{ marginTop: 4, textAlign: 'center' }} item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }} color="warning" >Weight & BMI Trend </Typography>

                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={weightBmiData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="weight" stroke="#8884d8" name="Weight (kg)" />
                            <Line type="monotone" dataKey="bmi" stroke="#82ca9d" name="BMI" />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid></>
    );
};

export default PatientProfile;
