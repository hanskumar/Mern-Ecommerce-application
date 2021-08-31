import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Slider from '../../components/middleSlider/Slider'
import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const Home = () => {
    const classes = useStyle();

    return (
        <>
            <Navbar/>
            <Box className={classes.component}>
                <Banner/>
                <Slider title="Deal of The Day"/>

                <Slider title="Recently Viewed"/>
            </Box>
        </>    
        
    )
}

export default Home
