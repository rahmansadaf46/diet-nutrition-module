/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Box,
    Button,
    FormControl,
    MenuItem,
    Modal,
    Select,
    TextField,
} from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { dietTemplates } from "../data/dietTemplates";

const localizer = momentLocalizer(moment);

const meals = [
    { name: "Breakfast", time: "08:00 AM" },
    { name: "Mid-Morning Snack", time: "10:00 AM" },
    { name: "Lunch", time: "01:00 PM" },
    { name: "Evening Snack", time: "05:00 PM" },
    { name: "Dinner", time: "08:00 PM" },
];

const DietChart = () => {
    const [events, setEvents] = useState<any>([]);
    const [selectedTemplate, setSelectedTemplate] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
    const [modalLabel, setModalLabel] = useState("");
    const [updatedLabel, setUpdatedLabel] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleTemplateSelect = (template: any) => {
        setSelectedTemplate(template);
        const dietData: any = dietTemplates[template as keyof typeof dietTemplates] || {};//+
        const newEvents: Array<{//+
            id: string;//+
            title: string;//+
            start: Date;//+
            end: Date;//+
        }> = [];

        if (!startDate || !endDate) {
            alert("Please select a start and end date range.");
            return;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);

        for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
            const formattedDate = moment(date).toDate();
            const dayName = moment(date).format("dddd");

            meals.forEach((meal: any) => {
                if (dietData[dayName]?.[meal.name]) {
                    // Extract the time parts from meal.time (e.g., "08:00 AM")
                    const [timePart, meridiem] = meal.time.split(" ");
                    const [hourStr, minuteStr] = timePart.split(":");
                    let hour = parseInt(hourStr, 10);
                    const minute = parseInt(minuteStr, 10);
            
                    // Convert to 24-hour format if needed
                    if (meridiem === "PM" && hour !== 12) {
                        hour += 12;
                    } else if (meridiem === "AM" && hour === 12) {
                        hour = 0;
                    }
            
                    // Set the start time using the parsed hour and minute.
                    const startTime = moment(formattedDate).set({ hour, minute });
            
                    // Create the event with a 1-hour duration.
                    newEvents.push({
                        id: `${formattedDate}-${meal.name}`,
                        title: `${meal.name}: ${dietData[dayName][meal.name]}`,
                        start: startTime.toDate(),
                        end: moment(startTime).add(1, "hour").toDate(),
                    });
                }
            });
            
        }
        console.log(newEvents);
        setEvents(newEvents);
    };

    const handleEventClick = (event: any) => {
        setSelectedEvent(event);
        setModalLabel(event.title.split(":")[0]);
        setUpdatedLabel(event.title.split(":")[1]);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedEvent(null);
    };

    const handleUpdateEvent = () => {
        if (selectedEvent) {
            const updatedEvents = events.map((event: any) =>
                event.id === selectedEvent.id ? { ...event, title: `${modalLabel}:${updatedLabel}` } : event
            );
            setEvents(updatedEvents);
            handleModalClose();
        }
    };

    return (
        <>
            <TextField
                label="Start Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                sx={{ mb: 2, mr: 2 }}
                size="small"
            />
            <TextField
                label="End Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                sx={{ mb: 2 }}
                size="small"
            />
            <br />
            <small>Select Diet Template</small>
            <FormControl disabled={!startDate && !endDate} size="small" fullWidth sx={{ mb: 3 }}>
                <Select
                    value={selectedTemplate}
                    onChange={(e) => handleTemplateSelect(e.target.value)}
                >
                    {Object.keys(dietTemplates).map((template) => (
                        <MenuItem key={template} value={template}>
                            {template}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, width: 1090 }}
                popup
                onSelectEvent={handleEventClick}
            />

            <Modal open={modalOpen} onClose={handleModalClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <h3>Edit {modalLabel} Meal Plan</h3>
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
