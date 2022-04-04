import React from 'react'
import {Typography, Container, makeStyles} from '@material-ui/core';

const useStyles=makeStyles(() => ({
    banner: {
        backgroundImage: "url(./public/LikeHomeBanner.jpg",
    },
    bannerContent: {
        height:300,
        display:"flex",
        flexDirection:"column",
        paddingTop: 100,
    },
    tagline: {
        display:"flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
}));

const Banner = () => {

const classes = useStyles();

  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.description}>
                <Typography
                    style={{
                        fontWeight: "bold",
                        marginBottom:15,
                    }}
                >
                    LikeHome.com
                </Typography>

                <Typography
                    variant='subtitle2'
                >
                    Anywhere in the world can be just like home!
                </Typography>
            </div>
        </Container>
    </div>
  )
}

export default Banner