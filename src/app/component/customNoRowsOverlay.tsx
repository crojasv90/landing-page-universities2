import {Stack} from "@mui/material";
import React from "react";

export default function CustomLoadingOverlay() {
    return (
        <Stack height="100%" alignItems="center" justifyContent="center">
            <img src={window.location.origin + '/images/empty.png'} alt="Data not found"/>
            <h3>Not have data to show</h3>
        </Stack>
    );
}
