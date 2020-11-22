import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Paper, FormControl, InputLabel, Select } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
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
            <Typography variant="h5" style={{ paddingBottom: 15, color: "#48286D" }}>View Class</Typography>

            <FormControl className={classes.formControl}>
                {/* <InputLabel>Class</InputLabel> */}
                <Select
                    variant="filled"
                    native
                    value={course}
                    onChange={handleChange}
                    style={{
                        padding: 0,
                        width: "260%",
                        // height: 40
                    }}
                >

                {/* <Select
                    // labelId="demo-customized-select-label"
                    // id="demo-customized-select"
                    value={course}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                > */}

                    <option aria-label="None" value="" />
                    <option value={options[0]}>Math</option>
                    <option value={options[1]}>English</option>
                    <option value={options[2]}>Science</option>
                </Select>
            </FormControl>


        </Paper>
    );
}