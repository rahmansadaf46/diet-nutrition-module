import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar sx={{ background: '#143E44' }} position="fixed">
            <Toolbar>
                <Avatar src={logo} alt="Logo" sx={{ marginRight: 2, width: '55px', height: '55px' }} />
                <Typography variant="h6" color="#F3F3E0"><b>Nutri-Health <span style={{color:'#FFB7BF'}}>Track</span></b></Typography>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuClick}
                    sx={{ ml: 'auto' }} // This will push the button to the right
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
