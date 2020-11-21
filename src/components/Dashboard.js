import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import { Box, Typography, Paper, Tabs, Tab } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EmailIcon from '@material-ui/icons/Email';
import ExitIcon from '@material-ui/icons/ExitToApp';

import ClassSelection from "./Dash/ClassSelection";
import StudentInfo from "./Dash/StudentInfo";
import StudentsList from "./Dash/StudentsList";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 60,
        flexDirection: "column",
        flexGrow: 1,
        width: '100% - 60px',
        height: '100%',
    },

    top: {
        marginTop: "100px",
        width: "100%",
        height: "50% - 100px",
        display: "flex",
        flexDirection: "row",
    },

    bottom: {
        width: "100%",
        height: "50%",
    },
}));


export default function Dashboard() {
    const classes = useStyles();
    const [selectedStudent, setSelectedStudent] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.top}>
                <ClassSelection />
                <StudentInfo />
            </Box>

            <Box className={classes.bottom}>
               <StudentsList/>
                {/* {value == 0 ? <Stats/> : <Box />}
                {value == 1 ? <ClassList/> : <Box />}
                {value == 2 ? <StudentsList/> : <Box />} */}
            </Box>
        </Box>
    )
}
