import React from 'react';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core';

export default function ParallaxStrip(){

    const useStyles = makeStyles((theme)=> ({
        parallax: {
            backgroundImage: 'url("https://images.unsplash.com/photo-1555656220-46e30749d330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80")',
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
