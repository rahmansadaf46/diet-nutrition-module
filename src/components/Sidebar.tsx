import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse, Typography } from "@mui/material";
import { Dashboard, People, Settings, ExpandLess, ExpandMore, Article } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [openSettings, setOpenSettings] = useState(false);

    const menuItems = [
        { name: "Dashboard", route: "/dashboard", icon: <Dashboard /> },
        { name: "Patients", route: "/patients", icon: <People /> },
        {
            name: "Settings",
            icon: <Settings />,
            subMenu: [
                { name: "Templates", route: "/template-creator", icon: <Article /> }
            ]
        }
    ];

    return (
        <Drawer variant="permanent" sx={{ width: 210, flexShrink: 0 }}>
            <List sx={{ width: 220, mt: -1 }}>
                {menuItems.map((item) => (
                    <React.Fragment key={item.name}>
                        <ListItem
                            onClick={() => {
                                if (item.subMenu) {
                                    setOpenSettings(!openSettings);
                                } else {
                                    navigate(item.route);
                                }
                            }}
                            sx={{
                                cursor: "pointer",
                                backgroundColor: location.pathname === item.route ? "#e0f7fa" : "transparent",
                                '&:hover': {
                                    backgroundColor: location.pathname === item.route ? "#b2ebf2" : "#f1f1f1",
                                }
                            }}
                        >
                            <ListItemIcon sx={{ color: location.pathname === item.route ? "#037080" : "#000000" }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        sx={{
                                            color: location.pathname === item.route ? "#037080" : "#000000",
                                            fontWeight: location.pathname === item.route ? "bold" : "normal",
                                            ml: -2

                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                }
                            />
                            {item.subMenu && (openSettings ? <ExpandLess /> : <ExpandMore />)}
                        </ListItem>

                        {item.subMenu && (
                            <Collapse in={openSettings} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.subMenu.map((subItem) => (
                                        <ListItem
                                            key={subItem.name}
                                            onClick={() => navigate(subItem.route)}
                                            sx={{
                                                pl: 4,
                                                cursor: "pointer",
                                                backgroundColor: location.pathname === subItem.route ? "#e3f2fd" : "transparent",
                                                '&:hover': { backgroundColor: "#f1f1f1" }
                                            }}
                                        >
                                            <ListItemIcon sx={{ color: "#000000" }}>{subItem.icon}</ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography
                                                        sx={{
                                                            color: location.pathname === subItem.route ? "#037080" : "#000000",
                                                            fontWeight: location.pathname === subItem.route ? "bold" : "bold",
                                                            ml:-2
                                                        }}
                                                    >
                                                        {subItem.name}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </React.Fragment>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
