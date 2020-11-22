import React from 'react';
import SideBar from "../components/SideBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import NavBar from "../components/NavBar";

export default function DashPage({children}) {
    return(
        <Box width="100vw" height="100vh">
            <CssBaseline />
            <NavBar></NavBar>
            <SideBar/>
            {children}
        </Box>
    );
}