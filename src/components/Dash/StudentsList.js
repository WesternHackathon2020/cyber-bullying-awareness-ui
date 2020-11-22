import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Paper, Divider, ListItemText, ListItem, List, ListItemSecondaryAction, Avatar, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@material-ui/core";
import ForwardIcon from '@material-ui/icons/Forward';

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

export default function StudentList({ onClicked, flaggedList=[], openModal = (cool)=>{console.log(cool);}}) {
    const classes = useStyles();
    const [selected, setSelected] = React.useState(null);

    const onClickedFlagged = (flagged) => {
        if (onClicked) onClicked(flagged);
        if (selected == flagged)
            return setSelected(null);
        setSelected(flagged);
    }
    // console.log(flaggedList);

    return (
        <Box style={{ width: "100% - 30px", maxHeight: "100%", overflow: 'auto', padding: 15, margin: 15, marginBottom: 0 }}>

            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">  </TableCell>
                            <TableCell align="left"> Sender</TableCell>
                            <TableCell align="center">  </TableCell>

                            <TableCell align="left">  </TableCell>
                            <TableCell align="left"> Sent To</TableCell>

                            <TableCell align="left"> Message</TableCell>
                            {/* <TableCell align="center">Action</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            flaggedList.map((row) => (
                                <TableRow 
                                    key={row._id}  
                                    onClick={() => { onClickedFlagged(row); }}
                                    style={selected == row ? { borderLeft: "10px solid #66CC00" } : {paddingLeft:10}}
                                >
                                    <TableCell align="left" scope="row" width={73}> <Avatar/> </TableCell>
                                    <TableCell align="left" scope="row" >{row.studentName} </TableCell>

                                    <TableCell align="left" scope="row"> <ForwardIcon style={{color:"#66CC00"}} /> </TableCell>

                                    <TableCell align="left" scope="row" width={73}> <Avatar/> </TableCell>
                                    <TableCell align="left">{row.messageTo}</TableCell>

                                    <TableCell align="left">{row.contentText}</TableCell>
                                    {/* <TableCell align="right">
                                        <Button 
                                            variant="contained"
                                            // onClick={openModal(row)}
                                        >
                                            Select
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
}
