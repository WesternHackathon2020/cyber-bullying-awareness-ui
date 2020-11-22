import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography} from '@material-ui/core';
import TelusResourceContainer from "./TelusResourceContainer";

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 60,
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        width: '100% - 80px',
        height: '100%',
        backgroundColor:"white",
        overflow: 'hidden',

    },

    top: {
        marginTop: '100px',
        marginBottom: '60px',

        width: '100%',
        height: '180px',
        display: 'flex',
        flexDirection: 'row',
    },

    bottom: {
        paddingBottom: '15px',

        width: '100%',
        flexGrow: 1,
        // backgroundColor:"blue",
        overflow: 'hidden',
    },
    telusTitle: {
        fontSize: "14",
        fontWeight: "600",
        color: "#4B286D",
        display: "inline",
    },
    title: {
        fontSize: "14",
        fontWeight: "600",
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

    const telusTitle = <Typography className={classes.telusTitle}>Telus Wise</Typography>
    return (
            <Box className={classes.root}>
                    <Typography classeName={classes.title}>Resources by {telusTitle}</Typography>
                <Box>
                    <TelusResourceContainer onClick={onEndBullyingClick}
                                            title={"#EndBullying 101"}
                                            icon={"priority"}
                                            description={"Help students define what it means to be cyberbullied."}/>
                    <TelusResourceContainer onClick={onSlangGlossaryClick}
                                            title={"Slang glossary"}
                                            icon={"mail"}
                                            description={"Learn what kids are really saying with this glossary of online slang and acronyms."}/>
                    <TelusResourceContainer onClick={onHowToHelpClick}
                                            title={"How to help"}
                                            icon={"priority"}
                                            description={"Help youth navigate cyberbullying with this informative guide"}/>
                </Box>
            </Box>
    );
}
