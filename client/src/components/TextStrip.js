import { Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


export default function TextStrip({text, title}){

    const useStyles = makeStyles((theme) => ({
        TextStrip: {
          justifyContent: 'center',
        },
        TextStripContact: {
            fontWeight: 'bold'
        }
      }));

      const classes = useStyles();

return(
<Box className={classes.TextStrip}>\
  {title}
  {text}
</Box>
)

}
