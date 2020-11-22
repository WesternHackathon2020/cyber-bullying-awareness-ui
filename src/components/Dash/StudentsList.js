import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";
import { Box, Typography, Paper, Divider, ListItemText, ListItem, List, ListItemAvatar, ListItemSecondaryAction, Avatar } from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EmailIcon from '@material-ui/icons/Email';
import ExitIcon from '@material-ui/icons/ExitToApp';

const flaggedContent = [
    { name: "Nathan", message: "wow you suck", time: "9:14 am", numOffences: 2, phoneNumber: "354-355-1479" },
    { name: "Harry", message: "wow you duck", time: "9:58 am", numOffences: 0, phoneNumber: "474-125-8742" },
    { name: "Navdeep", message: "sextant is an instrument", time: "11:11 am", numOffences: 1, phoneNumber: "814-375-8249" },
    { name: "Elton", message: "need more ice cream", time: "11:44 am", numOffences: 2, phoneNumber: "874-311-6784" },
    { name: "Nathan", message: "wow you suck", time: "9:14 am", numOffences: 2, phoneNumber: "354-355-1479" },
    { name: "Harry", message: "wow you duck", time: "9:58 am", numOffences: 0, phoneNumber: "474-125-8742" },
    { name: "Navdeep", message: "sextant is an instrument", time: "11:11 am", numOffences: 1, phoneNumber: "814-375-8249" },
    { name: "Elton", message: "need more ice cream", time: "11:44 am", numOffences: 2, phoneNumber: "874-311-6784" },
    { name: "Nathan", message: "wow you suck", time: "9:14 am", numOffences: 2, phoneNumber: "354-355-1479" },
    { name: "Harry", message: "wow you duck", time: "9:58 am", numOffences: 0, phoneNumber: "474-125-8742" },
    { name: "Navdeep", message: "sextant is an instrument", time: "11:11 am", numOffences: 1, phoneNumber: "814-375-8249" },
    { name: "Elton", message: "need more ice cream", time: "11:44 am", numOffences: 2, phoneNumber: "874-311-6784" },
];

const useStyles = makeStyles((theme) => ({
    list: {
        overflowY: "scroll",
        // maxHeight: "100%"
    },

    root: {
        // maxHeight: "100%",
        // overflowY: "hidden"
    }
}));

export default function StudentList({ onClicked }) {
    const classes = useStyles();
    const [selected, setSelected] = React.useState(null);

    const onClickedFlagged = (flagged) => {
        if (onClicked) onClicked(flagged);
        if (selected == flagged)
            return setSelected(null);
        setSelected(flagged);
    }

    const getList = () => {
        return (
            <List style={{maxHeight: '100%', overflow: 'auto'}}>
                {flaggedContent.map((content) => {
                    return (
                        <Box>
                            <ListItem key={content} button onClick={() => { onClickedFlagged(content); }} style={selected == content ? { border: "5px solid #66CC00" } : {}}>
                                <Box style={{ marginRight: 30 }}>
                                    <Box>
                                        <Avatar
                                            alt={content.name}
                                        // src={`/static/images/avatar/${value + 1}.jpg`}
                                        />
                                        <Typography>
                                            {content.name}
                                        </Typography>
                                    </Box>

                                </Box>
                                <ListItemText> {content.message} </ListItemText>
                                <ListItemSecondaryAction>
                                    {content.time}
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </Box>
                    );
                })}
            </List>
        );
    }


    return (
        // getList()
        // <Paper style={{ width: "100% - 30px", maxHeight: "100%", padding: 15, margin: 15, marginBottom: 0 }}>
        <Paper style={{ width: "100% - 30px", maxHeight: "100%",  overflow: 'auto', padding: 15, margin: 15, marginBottom: 0 }}>
            <Typography >Possible Cyber Bullying Detected</Typography>

            {/* <List style={{maxHeight: '100%', overflow: 'auto'}}> */}
            <List style={{maxHeight: '100%', overflow: 'auto'}}>
                {flaggedContent.map((content) => {
                    return (
                        <Box>
                            <ListItem key={content} button onClick={() => { onClickedFlagged(content); }} style={selected == content ? { border: "5px solid #66CC00" } : {}}>
                                <Box style={{ marginRight: 30 }}>
                                    <Box>
                                        <Avatar
                                            alt={content.name}
                                        // src={`/static/images/avatar/${value + 1}.jpg`}
                                        />
                                        <Typography>
                                            {content.name}
                                        </Typography>
                                    </Box>

                                </Box>
                                <ListItemText> {content.message} </ListItemText>
                                <ListItemSecondaryAction>
                                    {content.time}
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </Box>
                    );
                })}
            </List>
        </Paper>
    );
}
