import React from "react";
import { Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();  // Get the current location

    const menuItems = [
        { name: "Dashboard", route: "/dashboard" },
        { name: "Patients", route: "/patients" },
        { name: "Diet Charts", route: "/diet-charts" },
        { name: "Template Creator", route: "/template-creator" },
        { name: "Nutritional Assessment", route: "/nutritional-assessment" }
    ];

    return (
        <Drawer variant="permanent" sx={{ width: 250, flexShrink: 0, }}>
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        key={item.name}
                        onClick={() => navigate(item.route)}
                        sx={{
                            cursor: "pointer",
                            backgroundColor: location.pathname === item.route ? "#e0f7fa" : "transparent", // Active background color
                            '&:hover': {
                                backgroundColor: location.pathname === item.route ? "#b2ebf2" : "#f1f1f1", // Hover effect
                            }
                        }}
                    >
                        <ListItemText
                            primary={
                                <Typography
                                    sx={{
                                        color: location.pathname === item.route ? "#037080" : "#000000",
                                        fontWeight: location.pathname === item.route ? "bold" : "normal"
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
