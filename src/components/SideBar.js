import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import SettingsIcon from '@material-ui/icons/Settings'
import AssessmentIcon from '@material-ui/icons/Assessment'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function PersistentDrawerLeft(props) {
    const [isOpen,handleClose] = useState(props);
    const classes = useStyles();
    useEffect(() => {
        handleClose(props);
    }, [props]);

    console.log(isOpen)
    console.log(useState(props).isOpen)
    const list = () => (
        <div
            className={clsx(classes.list)}
            role="presentation"
        >
            <List>
                <ListItem button key={"Settings"} className="sidebar-list-item">
                    <SettingsIcon/>
                </ListItem>
                <ListItem button key={"Assessment"} className="sidebar-list-item">
                    <AssessmentIcon/>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
                {list()}
        </div>
    );
}