import React from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../../style/footer.css';

export default function Footer() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <div id="footer">
            <AppBar position="absolute" color="transparent" className="appBar">
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography variant="body1" color="inherit" className="typo">
                             Crojas-developer © {getCurrentYear()}
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )

}
