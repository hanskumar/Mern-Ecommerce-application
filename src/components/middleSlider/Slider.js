import React from 'react'
import { Box, makeStyles, Typography ,Button,Divider} from '@material-ui/core';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { dealData } from '../../constants/data'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 12,
        background: '#FFFFFF',
    }, 
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: 'auto',
        height: 150
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    deal: {
        display: 'flex',
        padding: '15px 20px'
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    wrapper: {
        padding: '25px 15px'
    },
    timer: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));

const Slider = ({title}) => {
    const classes = useStyle();

    return (

        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>

                <Button variant="contained" color="primary" className={classes.button}>View All</Button>
            </Box>
            <Divider />
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    dealData.map(item=>(
                        <Box textAlign="center" className={classes.wrapper}>

                                <img src={item.url} className={classes.image} />
                                <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{item.title.shortTitle}</Typography>
                                <Typography className={classes.text} style={{ color: 'green' }}>{item.discount}</Typography>
                                <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{item.tagline}</Typography>
                        </Box>

                    ))
                }
            </Carousel> 
        </Box>
    )
}

export default Slider
