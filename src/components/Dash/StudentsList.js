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


export default function StudentList({ pageIndex }) {
    const classes = useStyles();
    return (
        <Paper style={{width: "900px", height: "300px", padding: 15, margin: 15}}>
            <Typography>Student List</Typography>
        </Paper>
    );
}
