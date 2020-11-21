import React from 'react';
import SideBar from "../components/SideBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/NavBar";
import Dashboard from "../components/Dashboard";
class Home extends React.Component {

    render(){
        return(
            <Box width="100vw" height="100vh">
                <CssBaseline />
                <NavBar></NavBar>
                
                <SideBar/>
                <Dashboard />
            </Box>
        );
    }
}

export default Home;
