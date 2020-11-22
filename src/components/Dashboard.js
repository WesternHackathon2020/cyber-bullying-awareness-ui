import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import ClassSelection from './Dash/ClassSelection';
import StudentInfo from './Dash/StudentInfo';
import StudentsList from './Dash/StudentsList';

const useStyles = makeStyles((theme) => ({
    root: {
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
        marginTop: '100px',
        marginBottom: '60px',

        width: '100%',
        height: '180px',
        display: 'flex',
        flexDirection: 'row',
    },

    bottom: {
        paddingBottom: '15px',

        width: '100%',
        flexGrow: 1,
        // backgroundColor:"blue",
        overflow: 'hidden',
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    const [selectedFlagged, setSelectedFlagged] = React.useState(null);

    const onSelectedFlagged = (flagged) => {
        if (selectedFlagged === flagged) return setSelectedFlagged(null);
        return setSelectedFlagged(flagged);
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.top}>
                <ClassSelection />
                {selectedFlagged != null ? <StudentInfo studentName={selectedFlagged?.name} phoneNumber={selectedFlagged?.phoneNumber} numOffences={selectedFlagged?.numOffences} /> : <Box />}
            </Box>

            <Box className={classes.bottom}>
               <StudentsList onClicked={onSelectedFlagged} />

            </Box>
        </Box>
    );
}
