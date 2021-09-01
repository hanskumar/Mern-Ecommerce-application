import React,{useState} from 'react'
import { Dialog, DialogContent,makeStyles,Box,Typography,TextField,Button } from '@material-ui/core';

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh',
        maxWidth: 'unset !important'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background: '#2874f0',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
        width: '40%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20
        }
    },
    loginbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    requestbtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
    error: {
        fontSize: 12,
        color: '#ff6161',
        lineHeight: 0,
        marginTop: 10,
        fontWeight: 600
    }
})

const Login = ({open,setOpen}) => {

    const classes = useStyle();

    const [account,setAccount] = useState('login')
    const [ error, showError] = useState(true);

    const handleClose = () => {
        setOpen(false);
        setAccount('login');
    }

    const ToggleAccount = (value) => {
        setAccount(value);
    }

    console.log(account);

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display:'flex'}}>
                    <Box className={classes.image}>
             
                        <Typography variant="h5">Looks like you're new here</Typography>
                        <Typography style={{marginTop: 20}}>Signup to get started</Typography>

                    </Box>
                    {
                        account === 'login' ?
                    
                        <Box className={classes.login}>
                                <TextField  name='username' label='Enter Email/Mobile number' />
                                { error && <Typography className={classes.error}>Please enter valid Email ID/Mobile number</Typography> }
                                <TextField  name='password' label='Enter Password' />
                                <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Button className={classes.loginbtn}  >Login</Button>
                                <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                                <Button className={classes.requestbtn}>Request OTP</Button>
                                <Typography className={classes.createText} onClick={()=>ToggleAccount('signup')}>New to Flipkart? Create an account</Typography>
                        </Box>
                    :
                        <Box className={classes.login}>
                                <TextField  name='username' label='Enter Mobile number' />
                                
                                <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Button className={classes.loginbtn} >Continue</Button>
                                <Button className={classes.requestbtn} onClick={()=>ToggleAccount('login')}>Existing User? Login</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
           
        </Dialog>
    )
}

export default Login
