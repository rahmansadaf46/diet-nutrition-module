import React, { useState } from "react";
import {
    Container, Typography, List, ListItem, ListItemText,
    TextField, Button
} from "@mui/material";
import { patients } from "../data/patients";

const Patients: React.FC = () => {
    const [search, setSearch] = useState("");

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleViewDetails = (patient: any) => {
        alert(`Name: ${patient.name}\nAge: ${patient.age}\nCondition: ${patient.condition}`);
    };

    return (
        <Container>
            <Typography variant="h6" color="#037080"><b>Patient List</b></Typography>

            <TextField
                label="Search Patient"
                variant="outlined"
                // fullWidth
                margin="normal"
                size="small"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <List>
                {filteredPatients.map((patient) => (
                    <ListItem sx={{border:'1px solid lightGray', margin:'10px 0px', borderRadius:'6px'}} key={patient.id} secondaryAction={
                        <Button variant="contained" color="primary" onClick={() => handleViewDetails(patient)}>
                            View Info
                        </Button>
                    }>
                        <ListItemText
                            primary={patient.name}
                            secondary={`Age: ${patient.age}, Condition: ${patient.condition}`}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Patients;
