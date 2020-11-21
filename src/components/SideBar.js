import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import SettingsIcon from '@material-ui/icons/Settings'
import AssessmentIcon from '@material-ui/icons/Assessment'

const useStyles = makeStyles({
    list: {
        width: 50,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();

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
            <Drawer anchor={"left"} open={true}>
                {list("left")}
            </Drawer>
        </div>
    );
}