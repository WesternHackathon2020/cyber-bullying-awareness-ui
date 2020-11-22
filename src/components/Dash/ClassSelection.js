import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import { Box, Typography, Paper, FormControl, InputLabel, Select} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import EmailIcon from '@material-ui/icons/Email';
import ExitIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 150,
        flexShrink: 0,
    },
}));

export default function ClassSelection({ onSelection }) {
    const classes = useStyles();
    const options = ["Math", "English", "Science"];
    const uuids = ["123456789", "234567890", "345678901"];
    const [course, setCourse] = React.useState(options[0]);

    const handleChange = (event) => {
        setCourse(event.target.value);
    };

    return (
        <Paper style={{ minWidth: "300px", minHeight: "150px", padding: 15, margin: 15 }}>
            <Typography>Select a Class</Typography>

            <FormControl className={classes.formControl}>
                <InputLabel>Class</InputLabel>
                <Select
                    native
                    value={course}
                    onChange={handleChange}
                    style={{
                        // padding: 15,
                        width: 250,
                        height: 50
                    }}
                >

                    <option aria-label="None" value="" />
                    <option value={options[0]}>Math</option>
                    <option value={options[1]}>English</option>
                    <option value={options[2]}>Science</option>
                </Select>
            </FormControl>
        </Paper>
    );
}