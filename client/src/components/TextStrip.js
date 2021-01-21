import { Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


export default function TextStrip(){

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
<Box className={classes.TextStrip}>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</Box>
)

}
