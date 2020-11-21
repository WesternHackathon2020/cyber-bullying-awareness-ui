
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import { Box, Typography, Paper } from "@material-ui/core";
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


export default function StudentInfo({ studentName = "Will Hutchinson", phoneNumber = "555-555-5555", numOffences = 22 }) {
    const classes = useStyles();

    return (
        <Paper style={{ flexGrow: 1, minWidth: "300px", height: "100%", padding: 15, margin: 15 }}>
            <Typography variant="h3">Student Info</Typography>
            <Typography>Name: {studentName}</Typography>
            <Typography>Parent or Guardian's Number: {phoneNumber}</Typography>
            <Typography>Number of offences: {numOffences}</Typography>
        </Paper>
    );
}
