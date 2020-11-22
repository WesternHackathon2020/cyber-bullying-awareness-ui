import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Modal, Button, Paper } from '@material-ui/core';

import ClassSelection from './Dash/ClassSelection';
import StudentInfo from './Dash/StudentInfo';
import StudentsList from './Dash/StudentsList';
import WelcomeMessage from "./Dash/WelcomeMessage";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 60,
        marginLeft: 60,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: '100% - 60px',
        height: '100%',
        // backgroundColor:"red",
        overflow: 'hidden',

    },

    top: {
        // marginTop: '100px',
        marginBottom: '10px',
        marginTop: "0px",
        paddingTop: "0px",
        width: '100%',
        height: '180px',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor:"green",
    },

    bottom: {
        paddingBottom: '15px',

        width: '100%',
        flexGrow: 1,
        // backgroundColor:"blue",
        overflow: 'hidden',
    },
}));

export default function Dashboard({ courseList = [], flaggedMap = { Math: [], English: [], Science: [] } }) {
    const classes = useStyles();
    const [selectedFlagged, setSelectedFlagged] = React.useState(null);
    const [selectedStudent, setSelectedStudent] = React.useState(null);

    const [selectedClass, setSelectedClass] = React.useState("Math");
    const [isModelOpen, setIsModelOpen] = React.useState(false);


    // const [isLoading, setIsLoading] = React.useState(true);
    const openModal = () => {
        if (!selectedStudent) return;

        setIsModelOpen(true);
        console.log("OPeNING mODaL");
    }

    const closeModal = () => {
        setIsModelOpen(false);
    }

    const resolveSelected = () => {
        const flagged = selectedFlagged;
        const student = selectedStudent;

        flaggedMap[selectedClass] = flaggedMap[selectedClass].filter(function (obj) {
            return obj._id !== flagged._id;
        });
        setSelectedStudent(null);
        setSelectedFlagged(null);
        setIsModelOpen(false);
    }


    const onSelectedFlagged = (flagged) => {
        if (selectedFlagged == flagged) return setSelectedFlagged(null);
        setSelectedFlagged(flagged);
        console.log(":flagging id: ", flagged.studentId);
    };

    const onClassSelected = (className) => {
        setSelectedClass(className);
        console.log(className);
    };

    return (

        <Box className={classes.root}>

            <Dialog open={isModelOpen} onClose={closeModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Report or Resolve Incident</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter a massage for the principal below. <br />
                        <Box style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
                            <Typography style={{ fontWeight: 800, color: "#48286D" }}> Student: </Typography>
                        </Box>
                        <Typography variant="p" style={{ color: "#101419" }}> {selectedStudent?.name} </Typography>

                        <Box style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
                            <Typography style={{ fontWeight: 800, color: "#48286D" }}> Incident: </Typography>
                        </Box>
                        <Typography variant="p" style={{ color: "#101419" }}> {selectedFlagged?.contentText}</Typography>



                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Message"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={resolveSelected} color="primary">
                        Resolve Incident
                    </Button>
                    <Button onClick={resolveSelected} color="primary">
                        Send Message
                    </Button>
                </DialogActions>
            </Dialog>

            <WelcomeMessage />
            <Typography variant="h5" style={{ marginLeft: 15, paddingBottom: 0, marginBottom: 0, color: "#48286D" }}>Quick Stats</Typography>
            <Box className={classes.top}>
                <ClassSelection courseList={courseList} flaggedMap={flaggedMap} onSelection={onClassSelected} />
                <StudentInfo flagged={selectedFlagged} flaggedList={flaggedMap[selectedClass]} setSelectedStudent={setSelectedStudent} />
            </Box>

            <Box className={classes.bottom}>
                <Button
                    onClick={openModal}
                    variant="contained"
                    style={{ marginLeft: 30, color: "#48286D" }}
                >
                    Resolve
                </Button>
                <StudentsList onClicked={onSelectedFlagged} flaggedList={flaggedMap[selectedClass]} openModal={openModal} />
            </Box>


        </Box>
    );
}
