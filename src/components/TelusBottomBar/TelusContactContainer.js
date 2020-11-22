import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import TelusResourceContainer from "./TelusResourceContainer";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 60,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: '100% - 80px',
        // height: '220px',
        // backgroundColor: "white",
    },

    row: {
        display: 'flex',
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignContent: "spaceEvenly"
    }
}));

export default function TelusContactContainer() {
    const classes = useStyles();

    const onEndBullyingClick = () => {

    }

    const onSlangGlossaryClick = () => {

    }

    const onHowToHelpClick = () => {

    }

    return (
        <Box className={classes.root}>
            <Typography variant="h6" classeName={classes.title}>Resources by</Typography>
            <Typography variant="p" classeName={classes.telusTitle}>Telus Wise</Typography>

            <Box className={classes.row}>
                <TelusResourceContainer onClick={onEndBullyingClick}
                    title={"#EndBullying 101"}
                    icon={"priority"}
                    description={"Help students define what it means to be cyberbullied."} />
                    <Box width={30}/>
                <TelusResourceContainer onClick={onSlangGlossaryClick}
                    title={"Slang glossary"}
                    icon={"mail"}
                    description={"Learn what kids are really saying with this glossary of online slang and acronyms."} />
                    <Box width={30}/>

                <TelusResourceContainer onClick={onHowToHelpClick}
                    title={"How to help"}
                    icon={"priority"}
                    description={"Help youth navigate cyberbullying with this informative guide"} />
            </Box>
        </Box>
    );
}
