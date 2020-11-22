
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


export default function RecentAnalysis({ flaggedList }) {
    const classes = useStyles();

    const getTotalFlagged = () => {
        return flaggedList?.length || 0;
    }

    return (
        <Paper style={{ flexGrow: 1, minWidth: "300px", height: "100%", padding: 15, margin: 15 }}>
            <Typography variant="h5" style={{ paddingBottom: 15 }}>Recent Analysis</Typography>
            <Typography variant="h4" style={{ paddingBottom: 15 }}>{getTotalFlagged()} New Offenses</Typography>

        </Paper>
    );
}
