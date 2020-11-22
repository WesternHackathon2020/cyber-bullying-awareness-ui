import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, FormControl, InputLabel, Select} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 150,
        flexShrink: 0,
    },
}));

export default function ClassSelection({ onSelection }) {
    const classes = useStyles();
    const options = ["Math", "English", "Science"];
    const [course, setCourse] = React.useState(options[0]);

    const handleChange = (event) => {
        setCourse(event.target.value);
        onSelection(event.target.value);
    };

    return (
        <Paper style={{ minWidth: "300px", height: "130px", padding: 15, margin: 15, marginTop: 0 }}>
            <Typography variant="h5" style={{ paddingBottom: 15, color:"#48286D" }}>View Class</Typography>

            <FormControl className={classes.formControl}>
                <InputLabel>Class</InputLabel>
                <Select
                    native
                    value={course}
                    onChange={handleChange}
                    style={{
                        // padding: 15,
                        width: 250,
                        height: 40
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