import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

import ClassSelection from './Dash/ClassSelection';
import StudentInfo from './Dash/StudentInfo';
import StudentsList from './Dash/StudentsList';
import WelcomeMessage from "./Dash/WelcomeMessage";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:60,
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

export default function Dashboard({courseList=[], flaggedMap={Math:[], English:[], Science:[]}}) {
    const classes = useStyles();
    const [selectedFlagged, setSelectedFlagged] = React.useState(null);
    const [selectedClass, setSelectedClass] = React.useState("Math");
    // const [isLoading, setIsLoading] = React.useState(true);

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
            <WelcomeMessage />
            <Typography variant="h5" style={{ marginLeft:15, paddingBottom: 0, marginBottom: 0, color:"#48286D" }}>Quick Stats</Typography>
            <Box className={classes.top}>
                <ClassSelection courseList={courseList} flaggedMap={flaggedMap} onSelection={onClassSelected}/>
                <StudentInfo flagged={selectedFlagged} flaggedList={flaggedMap[selectedClass]} />
            </Box>

            <Box className={classes.bottom}>
                <StudentsList onClicked={onSelectedFlagged} flaggedList={flaggedMap[selectedClass]}/>
            </Box>
        </Box>
    );
}
