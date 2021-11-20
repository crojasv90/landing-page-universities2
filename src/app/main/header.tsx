import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import '../../style/header.css';

export default function Header() {

    return (
        <div className="root">
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className="menuButton"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={window.location.origin + '/images/logo.png'} alt="Crojas Programador Digital©" className="logo" />
                    <Typography variant="h4" className="title">
                        Search University's
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
