/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Grid, Typography } from "@mui/material";

// Sample Data
const weightBmiData = [
    { month: "January", weight: 70, bmi: 22.0 },
    { month: "February", weight: 71, bmi: 22.5 },
    { month: "March", weight: 72, bmi: 23.0 },
    { month: "April", weight: 73, bmi: 23.5 },
    { month: "May", weight: 74, bmi: 24.0 },
    { month: "June", weight: 75, bmi: 24.5 },
    { month: "July", weight: 76, bmi: 25.0 }
];

const bloodPressureData = [
    { week: "Week 1", systolic: 120, diastolic: 80 },
    { week: "Week 2", systolic: 122, diastolic: 82 },
    { week: "Week 3", systolic: 125, diastolic: 85 },
    { week: "Week 4", systolic: 118, diastolic: 78 },
    { week: "Week 5", systolic: 121, diastolic: 80 }
];

const heartRateOxygenData = [
    { day: "Monday", heartRate: 72, oxygenSaturation: 98 },
    { day: "Tuesday", heartRate: 75, oxygenSaturation: 97 },
    { day: "Wednesday", heartRate: 78, oxygenSaturation: 96 },
    { day: "Thursday", heartRate: 74, oxygenSaturation: 98 },
    { day: "Friday", heartRate: 70, oxygenSaturation: 99 }
];

const medicationAdherenceData = [
    { medication: "Medication 1", status: "Taken" },
    { medication: "Medication 2", status: "Missed" },
    { medication: "Medication 3", status: "Taken" },
    { medication: "Medication 4", status: "Taken" },
    { medication: "Medication 5", status: "Missed" }
];

const dietChartData = [
    { meal: "Breakfast", calories: 350, protein: 12, carbs: 45, fat: 10, timeOfDay: "7:00 AM" },
    { meal: "Lunch", calories: 500, protein: 20, carbs: 60, fat: 15, timeOfDay: "12:00 PM" },
    { meal: "Dinner", calories: 400, protein: 15, carbs: 50, fat: 12, timeOfDay: "6:00 PM" },
    { meal: "Snack", calories: 200, protein: 8, carbs: 25, fat: 5, timeOfDay: "3:00 PM" }
];

// Components for Tables
const Table = ({ headers, data }: { headers: string[], data: any[] }) => (
    <table className="responsive-table">
        <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {Object.values(row).map((value, idx) => (
                        <td key={idx}>{String(value)}</td>//+
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

const PatientDetailsData = () => (
    <>
        {/* <h2>Patient Profile Dashboard</h2> */}
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }} color="primary" variant="h6">  Weight & BMI Trend</Typography>
                    <Table
                        headers={['Month', 'Weight (kg)', 'BMI']}
                        data={weightBmiData}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={6}>
                <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }} color="warning" >   Blood Pressure Monitoring</Typography>
                    <Table
                        headers={['Week', 'Systolic (mmHg)', 'Diastolic (mmHg)']}
                        data={bloodPressureData}
                    />
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }} color="primary" variant="h6">      Heart Rate & Oxygen Levels</Typography>
                    <Table
                        headers={['Day', 'Heart Rate (bpm)', 'Oxygen Saturation (%)']}
                        data={heartRateOxygenData}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={6}>
                <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }} color="warning" > Medication Adherence</Typography>
                    <Table
                        headers={['Medication', 'Status']}
                        data={medicationAdherenceData}
                    />
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: 'bold' }} color="warning" >Active Diet Chart</Typography>
                    <Table
                        headers={['Meal', 'Calories', 'Protein (g)', 'Carbs (g)', 'Fat (g)', 'Time of Day']}
                        data={dietChartData}
                    />
                </Box>
            </Grid>
        </Grid>


    </>
);

export default PatientDetailsData;

// CSS for responsive tables
const styles = `
  .dashboard {
    padding: 20px;
  }

  h2, h3 {
    margin-bottom: 10px;
  }

  .responsive-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  .responsive-table th, .responsive-table td {
    padding: 8px 12px;
    text-align: left;
    border: 1px solid #ddd;
  }

  .responsive-table th {
    background-color: #f4f4f4;
  }

  .responsive-table td {
    background-color: #fafafa;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .responsive-table th, .responsive-table td {
      padding: 6px 10px;
      font-size: 12px;
    }

    .responsive-table {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    .responsive-table th, .responsive-table td {
      padding: 4px 8px;
      font-size: 10px;
    }

    .responsive-table {
      font-size: 10px;
    }
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
