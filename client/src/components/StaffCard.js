import { Box } from '@material-ui/core';
import React from 'react';

export default function Component(name, position) {

    return (
        <Box>
            <img src='' style={{ borderRadius: '50%' }} />
            <h3>{name},{position}</h3>
        </Box>
    )

}
