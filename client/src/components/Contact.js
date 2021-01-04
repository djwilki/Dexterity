import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

export default function Contact(){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');


return(
<Box>
<Box>
    <Typography>contact us</Typography>
    <Typography>-</Typography>
    <Box style={{display: 'flex', flexDirection: 'column'}}>
        <Box style={{display: 'flex', flexDirection: 'row'}}>
    <input type='email' placeholder='Email'/>
        <input type='text' placeholder='Name'/>
        </Box>
        <input type='text' placeholder='Title'/>
        <input type='textarea' placeholder='Message'/>
    </Box>
</Box>
<Box>
<Typography>visit us</Typography>
    <Typography>-</Typography>
    <Typography>Monday - Friday</Typography>
    <Typography>10:00 AM - 10:05 PM</Typography>
</Box>
<Box></Box>
</Box>
)

}
