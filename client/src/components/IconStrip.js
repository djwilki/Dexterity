import React from 'react';
import Box from '@material-ui/core/Box'
import ShowChart from '@material-ui/icons/ShowChart'
import Typography from '@material-ui/core/Typography'

export default function IconStrip({title, imgSrc}) {



    return (
        <Box style={{display: 'flex', flexDirection: 'row', padding: 'none', margin: 'none'}}>
            <Box style={{ color: 'white', backgroundColor: 'blue', height: '300px', width: '50vw', display:'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center' }}>
                <ShowChart style={{fontSize: '200px'}}></ShowChart>
                <Typography>{title}</Typography>
            </Box>
            {/* <Box style={{padding: 'none', margin: 'none'}}> */}
                <img style={{height: '300px', width: '50vw', objectFit: 'cover'}} src={imgSrc}></img>
            {/* </Box> */}
        </Box>
    )

}
