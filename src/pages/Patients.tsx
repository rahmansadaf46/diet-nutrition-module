 
import {
    Button,
    Container,
    List, ListItem, ListItemText,
    TextField,
    Typography
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { patients } from "../data/patients";

const Patients: React.FC = () => {
    const [search, setSearch] = useState("");

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(search.toLowerCase())
    );

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
                    <ListItem sx={{ border: '1px solid lightGray', margin: '10px 0px', borderRadius: '6px' }} key={patient.id} secondaryAction={
                        <Link to="/patient-profile" >
                            <Button sx={{ fontWeight: 'bold' }} variant="contained" color="info"> View Info
                            </Button>
                        </Link>

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
