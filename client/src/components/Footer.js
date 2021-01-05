import { Button } from '@material-ui/core';
import React from 'react';
import Box from '@material-ui/core/Box'

export default function Footer(){

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };



return(
<>
    <Box style={{display: 'flex', justifyContent: 'center'}}>
        <Button onClick={scrollTop}>Return To Top</Button>
    </Box>
</>
)

}
