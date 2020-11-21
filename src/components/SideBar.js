import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EmailIcon from '@material-ui/icons/Email';
import ExitIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 60;

const useStyles = makeStyles((theme) => ({

    drawer: {
        width: 150,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },

    icon: {
        width: 30,
        height: 30,
    },

    selectedIcon: {
        width: 30,
        height: 30,
    },

}));

export default function SideBar({ pageIndex }) {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >

            <Typography>CBD</Typography>
            <Toolbar />
            <List>
                <ListItem button key={"Settings"} className="sidebar-list-item">
                    <SettingsIcon className={classes.largeIcon} />
                    {/* <Typography>Settings</Typography> */}
                </ListItem>

                <ListItem button key={"Assessment"} className="sidebar-list-item">
                    <AssessmentIcon className={classes.largeIcon} />
                </ListItem>

                <ListItem button key={"Email"} className="sidebar-list-item">
                    <EmailIcon className={classes.largeIcon} />
                </ListItem>

                <ListItem button key={"Logout"} className="sidebar-list-item">
                    <ExitIcon className={classes.largeIcon} />
                </ListItem>


            </List>

        </Drawer>
    );
}
