import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0, mt:6}}>
            <List>
                {["Dashboard", "Patients", "Diet Charts", "Template Creator", "Nutritional Assessment"].map((text) => (
                    <ListItem button key={text} onClick={() => navigate(`/${text.toLowerCase().replace(" ", "-")}`)}>
                        <b><ListItemText sx={{ color: "#037080", fontWeight: 'bold' }} primary={text} /></b>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
