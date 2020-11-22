import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EmailIcon from '@material-ui/icons/Email';
import ExitIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 60;

const useStyles = makeStyles((theme) => ({

    drawer: {
        width: 150,
        flexShrink: 0,
        backgroundColor: "#48286D"
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#48286D"
    },

    icon: {
        width: 30,
        height: 30,
        color: "#FFF"
    },

    selectedIcon: {
        width: 30,
        height: 30,
        color: "#FFF"
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
                <ListItem button key="Settings" className="sidebar-list-item">
                    <SettingsIcon style={{color: "white"}} />
                    {/* <Typography>Settings</Typography> */}
                </ListItem>

                <ListItem button key="Assessment" className="sidebar-list-item">
                    <AssessmentIcon style={{color: "white"}} />
                </ListItem>

                <ListItem button key="Email" className="sidebar-list-item">
                    <EmailIcon style={{color: "white"}} />
                </ListItem>

                <ListItem button key="Logout" className="sidebar-list-item">
                    <ExitIcon style={{color: "white"}} />
                </ListItem>

            </List>

        </Drawer>
    );
}
