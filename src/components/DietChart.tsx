import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import { dietTemplates } from "../data/dietTemplates";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const meals = ["Breakfast", "Mid-Morning Snack", "Lunch", "Evening Snack", "Dinner"];

const DietChart: React.FC = () => {
    const [dietData, setDietData] = useState<Record<string, Record<string, string>>>({});
    const [selectedTemplate, setSelectedTemplate] = useState<string>("");

    // Handle manual input changes
    const handleChange = (day: string, meal: string, value: string) => {
        setDietData((prev) => ({
            ...prev,
            [day]: {
                ...prev[day],
                [meal]: value,
            },
        }));
    };

    // Apply a template when selected
    const handleTemplateSelect = (template: string) => {
        setSelectedTemplate(template);
        setDietData(dietTemplates[template] || {});
    };

    return (
        <>
            {/* Template Selector */}
            <small>Select Diet Template</small>
            <FormControl size="small" fullWidth sx={{mb:3}}>
                
                <Select value={selectedTemplate} onChange={(e) => handleTemplateSelect(e.target.value)}>
                    {Object.keys(dietTemplates).map((template) => (
                        <MenuItem key={template} value={template}>
                            {template}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Diet Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Day</TableCell>
                            {meals.map((meal) => (
                                <TableCell key={meal}>{meal}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {days.map((day) => (
                            <TableRow key={day}>
                                <TableCell>{day}</TableCell>
                                {meals.map((meal) => (
                                    <TableCell key={meal}>
                                        <TextareaAutosize
                                            minRows={2}
                                            style={{
                                                width: "100%",
                                                padding: "8px",
                                                fontSize: "14px",
                                                borderRadius: "5px",
                                                border: "1px solid #ccc",
                                            }}
                                            value={dietData[day]?.[meal] || ""}
                                            onChange={(e) => handleChange(day, meal, e.target.value)}
                                        />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default DietChart;
