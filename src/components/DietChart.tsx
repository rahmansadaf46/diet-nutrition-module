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
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { dietTemplates } from "../data/dietTemplates";

const localizer = momentLocalizer(moment);

const meals = [
    { name: "Breakfast", time: "08:00 AM" },
    { name: "Mid-Morning Snack", time: "10:00 AM" },
    { name: "Lunch", time: "13:00 PM" },
    { name: "Evening Snack", time: "15:00 PM" },
    { name: "Dinner", time: "20:00 PM" },
];
interface Event {
    id: string;
    title: string;
    start: Date;
    end: Date;
}
const CalendarComponent = BigCalendar as React.ComponentType<any>;
const DietChart = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
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
                    newEvents.push({
                        id: `${formattedDate}-${meal.name}`,
                        title: dietData[dayName][meal.name],
                        start: moment(formattedDate).set({
                            hour: parseInt(meal.time.split(":"), 10),
                            minute: parseInt(meal.time.split(":"), 10),
                        }).toDate(),
                        end: moment(formattedDate).add(1, "hour").toDate(),
                    });
                }
            });
        }

        setEvents(newEvents);
    };

    const handleEventClick = (event: any) => {
        setSelectedEvent(event);
        setUpdatedLabel(event.title);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedEvent(null);
    };

    const handleUpdateEvent = () => {
        if (selectedEvent) {
            const updatedEvents = events.map((event: any) =>
                event.id === selectedEvent.id ? { ...event, title: updatedLabel } : event
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

            <CalendarComponent
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
