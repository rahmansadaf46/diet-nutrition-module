import React, { useState } from "react";
import { FormControl, MenuItem, Select, Modal, Box, TextField, Button } from "@mui/material";
import { dietTemplates } from "../data/dietTemplates";
import Scheduler from "react-mui-scheduler";

const meals = [
    { name: "Breakfast", time: "08:00 AM" },
    { name: "Mid-Morning Snack", time: "10:00 AM" },
    { name: "Lunch", time: "13:00 PM" },
    { name: "Evening Snack", time: "15:00 PM" },
    { name: "Dinner", time: "20:00 PM" }
];

const DietChart: React.FC = () => {
    const [events, setEvents] = useState<any[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState<string>("");
    const [key, setKeys] = useState<number>(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
    const [updatedLabel, setUpdatedLabel] = useState("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    const state = {
        options: {
            transitionMode: "zoom",
            startWeekOn: "mon",
            defaultMode: "month",
            minWidth: 540,
            maxWidth: 540,
            minHeight: 540,
            maxHeight: 540
        },
        alertProps: {
            open: true,
            color: "info",
            severity: "info",
            message: "🚀 Meal plan scheduler loaded!",
            showActionButton: true,
            showNotification: true,
            delay: 1500
        },
        toolbarProps: {
            showSearchBar: false,
            showSwitchModeButtons: true,
            showDatePicker: true
        }
    };

    const handleTemplateSelect = (template) => {
        setSelectedTemplate(template);
        const dietData = dietTemplates[template] || {};
        const newEvents = [];

        if (!startDate || !endDate) {
            alert("Please select a start and end date range.");
            return;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);

        for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
            const formattedDate = date.toISOString().split("T")[0];
            const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

            meals.forEach((meal) => {
                if (dietData[dayName]?.[meal.name]) {
                    newEvents.push({
                        id: `${formattedDate}-${meal.name}`,
                        label: dietData[dayName][meal.name],
                        groupLabel: meal.name,
                        user: "Diet Plan",
                        color: "#099ce5",
                        startHour: meal.time,
                        endHour: "",
                        date: formattedDate,
                        createdAt: new Date(),
                        createdBy: "System"
                    });
                }
            });
        }

        setEvents(newEvents);
        setKeys(key + 1);
    };

    const handleEventClick = (event: any, item: any) => {
        setSelectedEvent(item);
        setUpdatedLabel(item.label);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedEvent(null);
        setKeys(key + 1);

    };

    const handleUpdateEvent = () => {
        if (selectedEvent) {
            const updatedEvents = events.map(event =>
                event.id === selectedEvent.id ? { ...event, label: updatedLabel } : event
            );
            setEvents(updatedEvents);
            handleModalClose();
        }
    };

    const filteredEvents = events.filter(event => {
        if (!startDate || !endDate) return true;
        return event.date >= startDate && event.date <= endDate;
    });

    return (
        <>
            <small>Select Diet Template</small>
            <FormControl size="small" fullWidth sx={{ mb: 3 }}>
                <Select value={selectedTemplate} onChange={(e) => handleTemplateSelect(e.target.value)}>
                    {Object.keys(dietTemplates).map((template) => (
                        <MenuItem key={template} value={template}>
                            {template}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                label="Start Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                sx={{ mb: 2, mr: 2 }}
            />
            <TextField
                label="End Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                sx={{ mb: 2 }}
            />

            <div key={key}>
                <Scheduler
                    locale="en"
                    events={filteredEvents}
                    legacyStyle={false}
                    options={state.options}
                    alertProps={state.alertProps}
                    toolbarProps={state.toolbarProps}
                    onTaskClick={handleEventClick}
                />
            </div>

            <Modal open={modalOpen} onClose={handleModalClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <h3>Edit Meal Plan</h3>
                    <TextField
                        fullWidth
                        label="Meal"
                        value={updatedLabel}
                        onChange={(e) => setUpdatedLabel(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" color="primary" onClick={handleUpdateEvent}>
                        Update
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default DietChart;
