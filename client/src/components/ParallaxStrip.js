import React from 'react';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core';

export default function ParallaxStrip({url}){

    const useStyles = makeStyles((theme)=> ({
        parallax: {
            backgroundImage: `url(${url})`,
            height: "500px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }
    }));

    const classes = useStyles();


return(
<Box className={classes.parallax}>
</Box>
)

}
