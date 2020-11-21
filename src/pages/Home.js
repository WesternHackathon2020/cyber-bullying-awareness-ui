import React from 'react';
import SideBar from "../components/SideBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import NavBar from "../components/NavBar";
class Home extends React.Component {

    render(){
        return(
            <Box>
                <CssBaseline />
                <NavBar></NavBar>
                <SideBar/>
                <Box>
                    <Typography>
                        Home
                    </Typography>
                </Box>
            </Box>
        );
    }
}

export default Home;
