
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from "@material-ui/core";

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
            <Typography variant="h3" style={{paddingBottom: 15}}>Student Info</Typography>

            <Typography>Name: {studentName}</Typography>
            <Typography>Guardian's Number: {phoneNumber}</Typography>
            <Typography># Of Offences: {numOffences}</Typography>
        </Paper>
    );
}
