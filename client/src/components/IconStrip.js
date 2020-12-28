import React from 'react';
import Box from '@material-ui/core/Box'
import ShowChart from '@material-ui/icons/ShowChart'

export default function IconStrip() {



    return (
        <Box style={{display: 'flex', flexDirection: 'row'}}>
            <Box style={{ backgroundColor: 'blue', width: '50vw' }}>
                <ShowChart></ShowChart>
                <div>{'HeartRate'}</div>
            </Box>
            <Box style={{width: '50vw'}}>
                <img src={'https://images.unsplash.com/photo-1555656220-46e30749d330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'}></img>
            </Box>
        </Box>
    )

}
