import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import PriorityIcon from "@material-ui/icons/PriorityHigh";
import MailIcon from "@material-ui/icons/Mail";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
    root: {
        width:275, height:220,
        padding:15
    },
}));

export default function TelusResourceContainer(props) {
    const classes = useStyles();

    const {title,icon,description,onClick} = props;
    console.log(title)
    console.log(props)
    return (
        <Paper className={classes.root}>
            {icon === "priority" ? <PriorityIcon style={{color:"#4B286D", fontSize: 40}}/> : <MailIcon style={{color:"#4B286D", fontSize: 40}}/>}
            <Typography variant="h6" style={{color:"#66CC00"}}>{title}</Typography>
            <Typography >{description}</Typography>
            <Typography style={{marginTop: 10}} onClick={onClick}>View more</Typography>
        </Paper>
    );
}
