import React,{useContext,useState} from 'react'
import { AppBar,Button,makeStyles,Box,Typography,Badge } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import Login from '../../components/Login/Login'

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    wrapper: {
        margin: '0 5% 0 auto', 
        display: 'flex',    
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                marginTop: 10
            }      
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }   
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF'
        }   
    }
}));


const HeaderButtons = () => {

    const classes = useStyle();

    const [open,setOpen] = useState(false);

    const OpenLoginModel = ()=> {
        setOpen(true);
    }

    return (
        <Box className={classes.wrapper}>

            <Link to="">
                <Button className={classes.login} variant="contained" onClick={()=> OpenLoginModel() }>Login</Button>
            </Link>

            <Link to="/more">
                <Typography style={{ marginTop: 2 }}>More</Typography>
            </Link>
            
            
            <Link to="/cart">
            
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCart />
                    <Typography style={{ marginLeft: 10 }}>Cart</Typography>
                </Badge>
                
            </Link>

            <Login open={open} setOpen={setOpen}/>
        </Box>

        
    )
}

export default HeaderButtons
