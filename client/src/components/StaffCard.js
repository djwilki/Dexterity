import { Box } from '@material-ui/core';
import React from 'react';

export default function StaffCard(name, position, path) {

    return (
        <Box>
            <img src={path} style={{ borderRadius: '50%' }} />
            <h3>{name},{position}</h3>
        </Box>
    )

}
