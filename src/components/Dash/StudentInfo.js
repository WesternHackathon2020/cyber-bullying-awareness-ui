
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Box } from "@material-ui/core";
import api from "../../api";
import RecentAnalysis from "../../components/Dash/RecentAnalysis";

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 150,
        flexShrink: 0,
    },
}));


export default function StudentInfo({flagged, flaggedList, setSelectedStudent}) {
    const classes = useStyles();
    const [student, setStudent] = React.useState(null);
    const [pastFlagged, setPassedFlagged] = React.useState(null);

    useEffect(()=>{
        console.log("YAY using the effect finally");
        const init = async ()=>{
            try {
                console.log("getting user");
                // let teacher = await api.Teacher.getTeachersById(teacherId);
                if (!flagged) return console.log("no flagged, so returning");
                if (flagged == pastFlagged) return console.log("flag is same so returning");

                const student = (await api.Students.getStudentsByUUId(flagged.studentId)).data;
                setSelectedStudent(student);
                console.log(student);
                setStudent(student);
                setPassedFlagged(flagged);
                // setIsLoading(false);
            }
            catch (error) {
                console.log(error);
                // setIsLoading(false);
            }
        };

        init();
    },);

    if (flagged == null) 
        return (<RecentAnalysis flaggedList={flaggedList}/>);
        // return (<div></div>);

    return (
        <Paper style={{ flexGrow: 1, minWidth: "300px", height: "100%", padding: 15, margin: 15 }}>
            <Typography variant="h5" style={{ paddingBottom: 15, color:"#48286D" }}>Student Info</Typography>
            
            <Box style={{display:"flex", flexDirection: "row", alignContent: "center"}}>
                <Typography style={{ fontWeight:400, paddingBottom:0, padding:5 }}> Name: </Typography>
                <Typography variant="h6" style={{ fontWeight:800, paddingBottom:0 }}> {student?.name}</Typography>
            </Box>

            <Box style={{display:"flex", flexDirection: "row", alignContent: "center"}}>
                <Typography style={{ fontWeight:400, paddingBottom:0, padding:5 }}> Guardian's #: </Typography>
                <Typography variant="h6" style={{ fontWeight:800, paddingBottom:0 }}> 555-555-5555</Typography>
            </Box>
            <Box style={{display:"flex", flexDirection: "row", alignContent: "center"}}>
                <Typography style={{ fontWeight:400, paddingBottom:0, padding:5 }}> Number Of Offences: </Typography>
                <Typography variant="h6" style={{ fontWeight:800, paddingBottom:0 }}> {(student?.flaggedCount || 0) + 1}</Typography>
            </Box>
        </Paper>
    );
}
