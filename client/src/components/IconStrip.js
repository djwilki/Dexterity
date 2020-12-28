import React from 'react';
import Box from '@material-ui/core/Box'
import ShowChart from '@material-ui/icons/ShowChart'
import Typography from '@material-ui/core/Typography'

export default function IconStrip() {



    return (
        <Box style={{display: 'flex', flexDirection: 'row'}}>
            <Box style={{ color: 'white', backgroundColor: 'blue', height: '300px', width: '50vw', display:'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center' }}>
                <ShowChart style={{fontSize: '200px'}}></ShowChart>
                <Typography>{'HeartRate'}</Typography>
            </Box>
            <Box>
                <img style={{height: '300px', width: '50vw'}} src={'https://images.unsplash.com/photo-1555656220-46e30749d330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'}></img>
            </Box>
        </Box>
    )

}
