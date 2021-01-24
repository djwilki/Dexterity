import { Box } from '@material-ui/core';
import React from 'react';

export default function Component(name, position, image) {

    return (
        <Box>
            <img src={image} style={{ borderRadius: '50%' }} />
            <h3>{name},{position}</h3>
        </Box>
    )

}
