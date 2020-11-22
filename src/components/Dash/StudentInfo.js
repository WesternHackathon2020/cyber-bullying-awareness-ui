
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from "@material-ui/core";
import api from "../../api";
import RecentAnalysis from "../../components/Dash/RecentAnalysis";

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 150,
        flexShrink: 0,
    },
}));


export default function StudentInfo({flagged}) {
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
    if (flagged == null) return (<div></div>);

    return (
        <Paper style={{ flexGrow: 1, minWidth: "300px", height: "100%", padding: 15, margin: 15 }}>
            <Typography variant="h3" style={{paddingBottom: 15}}>Student Info</Typography>

            <Typography>Name: {student?.name}</Typography>
            <Typography>Guardian's Number: 555-555-5555 {student?.phoneNumber}</Typography>
            <Typography># Of Offences: {(student?.flaggedCount || 0) + 1}</Typography>
        </Paper>
    );
}
