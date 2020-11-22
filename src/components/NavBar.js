import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

// import logo from '../../assets/logo_dark.png'
import { Link } from 'react-router-dom';
import { Box, IconButton, Toolbar, Typography } from '@material-ui/core';

const logo = 'https://media.discordapp.net/attachments/779529187693953038/779709335755423783/received_189152492797232.webp';
const avatar = 'https://avatars0.githubusercontent.com/u/9293542?s=460&u=c8cada459ed5e1e1f8ca0af10f2a6f1958a4d097&v=4';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
    },
    flex: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

}));

export default function NavBar({ pageIndex }) {
    const classes = useStyles();

    return (
        <div className={classes.root} display="flex">
            <CssBaseline />
            <AppBar className={classes.appBar} position="fixed"> 
                <Toolbar className={classes.root} flex="1">
                    <Link to="/">
                        <img src={logo} alt="Cyber Bully Detector" style={{ maxHeight: '60px', paddingTop: '10px', paddingLeft: '15px', paddingRight: '15px' }} />
                    </Link>
                    
                    <Typography variant="h4" style={{ color: '#1E2B37', paddingLeft: 30 }}>Teacher Dashboard</Typography>
                    <Box className={classes.flex}> </Box>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>

                    <Avatar alt="Isaiah Ballah" src={avatar} />

                    <Box width={20} />

                    <Box width={100}>
                        <Typography style={{ color: '#1E2B37' }}>
                            Hello, 
{' '}
<Typography style={{ color: '#1E2B37', fontWeight: 700 }}>Isaiah!</Typography>
                        </Typography>
                    </Box>

                    <IconButton>
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    );
}
