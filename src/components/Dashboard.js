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
        padding: 15,
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: '100% - 60px',
        height: '100%',
        // backgroundColor:"red",
        overflow: "hidden"

    },

    top: {
        marginTop: "100px",
        marginBottom: "60px",

        width: "100%",
        height: "180px",
        display: "flex",
        flexDirection: "row",
    },

    bottom: {
        paddingBottom: "15px",

        width: "100%",
        flexGrow: 1,
        // backgroundColor:"blue",
        overflow: "hidden"
    },
}));


export default function Dashboard() {
    const classes = useStyles();
    const [selectedFlagged, setSelectedFlagged] = React.useState(null);

    const onSelectedFlagged = (flagged) => {
        if (selectedFlagged == flagged)
            return setSelectedFlagged(null);
        setSelectedFlagged(flagged);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.top}>
                <ClassSelection />
                {selectedFlagged != null ? <StudentInfo studentName={selectedFlagged?.name} phoneNumber={selectedFlagged?.phoneNumber} numOffences={selectedFlagged?.numOffences} /> : <Box/>}
            </Box>

            <Box className={classes.bottom}>
               <StudentsList onClicked={onSelectedFlagged}/>

            </Box>
        </Box>
    )
}
