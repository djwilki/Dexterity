import { Box } from '@material-ui/core';
import React from 'react';

export default function StaffCard(props) {


    return (
        <Box>
            <img src={props.path} style={{ borderRadius: '50%' }} />
            <h3>{props.name},{props.position}</h3>
        </Box>
    )

}
