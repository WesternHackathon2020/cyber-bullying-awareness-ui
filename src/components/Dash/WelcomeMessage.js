
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import { Box, Typography, Paper, Avatar } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EmailIcon from '@material-ui/icons/Email';
import ExitIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 150,
        flexShrink: 0,
    },
}));


export default function WelcomeMessage({ teacher = {name: "Ms. Smith"} }) {
    const classes = useStyles();

    return (
        <Paper style={{ width: "100% - 15px", minHeight: "110px", padding: 15, margin: 15 }}>
            <Box style={{display:'flex', flexDirection:"row"}}>
                <Box width="100px">
                    {/* <Avatar sizes="100px"/> */}
                    {/* Will insert image here */}
                </Box>

                <Box style={{display:'flex', flexDirection:"column"}}>
                    {/* <Typography variant="h4" style={{ paddingBottom: 15, color: "#48286D", fontWeight: 800 }}>Welcome {teacher.name}!</Typography> */}
                    <Typography variant="h4" style={{ paddingBottom: 10, fontWeight: 800 }}>Welcome {teacher.name}!</Typography>
                    <Typography variant="h5" style={{ paddingBottom: 15, color:"#48286D" }}>Your updates are as follows</Typography>
                </Box>
            </Box>
        </Paper>
    );
}
