import React from 'react';
import SideBar from "../components/SideBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu'
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";

class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            sideBarOpen: false,
        }
    }


    render(){
        const {sideBarOpen} = this.state;

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
