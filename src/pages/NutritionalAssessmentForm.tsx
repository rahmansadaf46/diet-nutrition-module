import React from "react";
import {
    TextField,
    Checkbox,
    FormControlLabel,
    Grid,
    Typography,
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@mui/material";

const PatientDietForm: React.FC = () => {
    return (
        <Box sx={{ padding: '0px 20px' }}>
            <Typography variant="h6" color="#037080"><b> Nutritional Assessment Form</b></Typography>



            {/* General Information */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6">General Information</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        {/* <TextField size="small" fullWidth label="Date" type="date" InputLabelProps={{ shrink: true }} /> */}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* <TextField size="small" fullWidth label="Contact No." /> */}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField size="small" fullWidth label="Patient Name" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField size="small" fullWidth label="Age" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField size="small" fullWidth label="Height" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField size="small" fullWidth label="Weight" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField size="small" fullWidth label="BMI" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField size="small" fullWidth label="IBW" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField size="small" fullWidth label="Diagnosis" />
                    </Grid>
                </Grid>
            </Box>

            {/* Physical Examination */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6">Physical Examination</Typography>
                <Table>
                    <TableBody>
                        {[
                            { label: "Edema", options: ["Present", "Absent"] },
                            { label: "Muscle Wasting", options: ["Present", "Absent"] },
                            { label: "Ascites", options: ["Present", "Absent"] },
                            { label: "Skin", options: ["Healthy", "Dry", "Scaly", "Patchy"] },
                            { label: "Mouth", options: ["Normal", "Sores", "Altered Taste Sensations"] },
                            { label: "Tongue", options: ["Deep Red", "Rough", "Raw", "Swollen", "Smooth"] },
                            { label: "Nails", options: ["Pink Nail Beds", "Smooth", "Firm", "Spoon Shaped"] },
                            { label: "Eyes", options: ["Dry Membranes", "Redness", "Red Rimmed"] },
                            { label: "Teeth", options: ["Cavities", "Erupting Abnormally", "Missing"] },
                            { label: "Hair", options: ["Dull", "Dry", "Thin", "Wire-like", "Sparse"] },
                        ].map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.label}</TableCell>
                                <TableCell>
                                    {row.options.map((option, idx) => (
                                        <FormControlLabel
                                            key={idx}
                                            control={<Checkbox />}
                                            label={option}
                                            sx={{ mr: 2 }}
                                        />
                                    ))}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>

            {/* Biochemical Findings */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6">Biochemical Findings</Typography>
                <Grid container spacing={2}>
                    {[
                        "Lipid Profile",
                        "Iron",
                        "CBC",
                        "Calcium",
                        "Renal Function Test (RFT)",
                        "Vitamin D",
                        "Liver Function Test (LFT)",
                        "Vitamin B12",
                    ].map((field, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <TextField size="small" fullWidth label={field} />
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <TextField size="small" fullWidth label="Allergy/Drug Interaction" />
                    </Grid>
                </Grid>
            </Box>

            {/* Metabolic Stress */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6">Metabolic Stress</Typography>
                <Grid container spacing={2}>
                    {[
                        { label: "Low" },
                        { label: "Moderate" },
                        { label: "High" },
                    ].map((stress, index) => (
                        <Grid item xs={4} key={index}>
                            <FormControlLabel control={<Checkbox />} label={stress.label} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* SGA Rating */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6">SGA Rating</Typography>
                <Grid container spacing={2}>
                    {[
                        { label: "Well-nourished" },
                        { label: "Moderately Malnourished" },
                        { label: "Severely Malnourished" },
                    ].map((rating, index) => (
                        <Grid item xs={4} key={index}>
                            <FormControlLabel control={<Checkbox />} label={rating.label} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Notes */}
            <Box sx={{ mb: 3 }}>
                <TextField size="small"
                    fullWidth
                    label="Nutritionist's Notes"
                    multiline
                    rows={4}
                    sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
                />
            </Box>

            <Box>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default PatientDietForm;
