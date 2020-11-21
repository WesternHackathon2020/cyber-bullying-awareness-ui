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
const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: '#48286D',
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: 24,
        marginRight: theme.spacing(4),
        color: "#C9D2DE",

        '&:hover': {
            color: '#48286D',
            opacity: 1,

        },
        '&$selected': {
            color: '#48286D',
        },
        '&:focus': {
            color: '#48286D',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 60,
        flexDirection: "column",
        flexGrow: 1,
        width: '100% - 60px',
        height: '100%',
    },

    top: {
        width: "100%",
        height: "50%",
    },

    bottom: {
        width: "100%",
        height: "50%",
    },
}));

export default function Dashboard({ pageIndex }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box className={classes.root}>
            <Box className={classes.top}>
                Top
            </Box>

            <Box className={classes.bottom}>
                <AntTabs value={value} onChange={handleChange}>
                    <AntTab label="Stats" />
                    <AntTab label="Class List" />
                    <AntTab label="Student List" />
                </AntTabs>

                
            </Box>

        </Box>
    )
}
