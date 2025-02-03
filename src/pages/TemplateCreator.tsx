import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid, Box } from "@mui/material";
import { dietTemplates } from "../data/dietTemplates";

const TemplateCreator: React.FC = () => {
    const [templateName, setTemplateName] = useState<string>("");
    const [dietData, setDietData] = useState<Record<string, Record<string, string>>>({
        Monday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
        Tuesday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
        Wednesday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
        Thursday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
        Friday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
        Saturday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
        Sunday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
    });

    const handleChange = (day: string, meal: string, value: string) => {
        setDietData((prev) => ({
            ...prev,
            [day]: {
                ...prev[day],
                [meal]: value,
            },
        }));
    };

    const handleSaveTemplate = () => {
        if (templateName) {
            dietTemplates[templateName] = dietData; // Save the template to the dietTemplates object
            alert("Template saved successfully!");
            setTemplateName("");
            setDietData({
                Monday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
                Tuesday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
                Wednesday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
                Thursday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
                Friday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
                Saturday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
                Sunday: { Breakfast: "", "Mid-Morning Snack": "", Lunch: "", "Evening Snack": "", Dinner: "" },
            });
        } else {
            alert("Please provide a template name!");
        }
    };

    return (
        <Container>
            {/* <Typography variant="h5" gutterBottom></Typography> */}
            <Typography variant="h6" color="#037080"><b>Create a New Diet Template</b></Typography>

            {/* Template Name */}
            <TextField size="small"
                label="Template Name"
                variant="outlined"
                fullWidth
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                margin="normal"
            />

            {/* Meal Plan Inputs */}
            <Grid container spacing={3}>
                {Object.keys(dietData).map((day) => (
                    <Grid item xs={12} sm={6} md={4} key={day}>
                        <Box>
                            <Typography variant="h6">{day}</Typography>
                            {Object.keys(dietData[day]).map((meal) => (
                                <TextField size="small"
                                    key={meal}
                                    label={meal}
                                    variant="outlined"
                                    fullWidth
                                    value={dietData[day][meal]}
                                    onChange={(e) => handleChange(day, meal, e.target.value)}
                                    margin="normal"
                                />
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Save Button */}
            <Button variant="contained" color="primary" onClick={handleSaveTemplate} sx={{ mt: 3 }}>
                Save Template
            </Button>
        </Container>
    );
};

export default TemplateCreator;
