import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import PriorityIcon from "@material-ui/icons/PriorityHigh";
import MailIcon from "@material-ui/icons/Mail";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 60,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: '100% - 60px',
        height: '100%',
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

export default function TelusResourceContainer(props) {
    const classes = useStyles();

    const {title,icon,description,onClick} = props;
    console.log(title)
    console.log(props)
    return (
        <Box className={classes.root}>
            {icon === "priority" ? <PriorityIcon/> : <MailIcon/>}
            <Typography>{title}</Typography>
            <Paper>{description}</Paper>
            <Typography onClick={onClick}>View All</Typography>
        </Box>
    );
}
