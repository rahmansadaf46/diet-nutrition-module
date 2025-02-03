import React from "react";
import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";

const Header: React.FC = () => {
    return (
        <AppBar sx={{ background:'#97B43C',}} position="fixed">
            <Toolbar>
                <Avatar src="https://w7.pngwing.com/pngs/2/979/png-transparent-dietary-supplement-herbal-center-energetic-nutrition-health-food-leaf-text.png" alt="Logo" sx={{ marginRight: 2 }} />
                <Typography variant="h6" color="#037080"><b>Diet & Nutrition Module</b></Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
