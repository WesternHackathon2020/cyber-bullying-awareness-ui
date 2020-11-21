import React from 'react';
import SideBar from "../components/SideBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class Home extends React.Component {

    render(){
        return(
            <div className="homepage">
                <CssBaseline />
                <AppBar
                    position="fixed"
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Cyber Bullying Detector
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="sidebar">
                    <SideBar/>
                </div>
                <div className="main-section">
                    MAIN
                </div>
            </div>
        );
    }
}

export default Home;
