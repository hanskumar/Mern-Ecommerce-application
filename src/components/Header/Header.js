import React from 'react'
import { AppBar,Toolbar,makeStyles,Box,Typography } from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import Search from './Search';
import { Link } from 'react-router-dom';
import HeaderButtons from './HeaderButtons';


const useStyle = makeStyles(theme => ({
    header: {
        background: '#2874f0',
        height: 63
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    logo: {
        width: 75
    },
    container: {
        display: 'flex',
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    list: {
        width: 250
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    customButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    }
}));

const Header = () => {

    const classes = useStyle();

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <div>
            <AppBar position="fixed" className={classes.header}> 
                <Toolbar>
                    <Box className={classes.component}> 
                        <Link to="/">  
                            <img src={logoURL} alt=""  className={classes.logo}/>
                        </Link>
                        <Box component="span" className={classes.container}>
                            <Typography className = {classes.subHeading}>Explore </Typography>
                            <img src={subURL} className={classes.subURL} />
                        </Box>
                    </Box>

                    <Search/>

                    <HeaderButtons/>


                </Toolbar>
                
                
            </AppBar>
        </div>
    )
}

export default Header
