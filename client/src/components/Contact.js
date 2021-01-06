import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import Maps from './Maps';


export default function Contact(){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');


return(
<Box style={{display: 'flex', flexDirection: 'row'}}>

    <Box style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Typography>contact us</Typography>
    <Typography>-</Typography>
        <Box style={{display: 'flex', flexDirection: 'row'}}>
    <input type='email' placeholder='Email'/>
        <input type='text' placeholder='Name'/>
        </Box>
        <input type='text' placeholder='Title'/>
        <input type='textarea' placeholder='Message'/>
    </Box>

<Box style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<Typography>visit us</Typography>
    <Typography>-</Typography>
    <Typography>Monday - Friday</Typography>
    <Typography>10:00 AM - 10:05 PM</Typography>
    <Maps/>
    <Typography>Phone # 888-888-8888</Typography>
    <Typography>Fax # 888-888-8888</Typography>
    <Typography>1 California Dr</Typography>
    <Typography>California, CA 94087</Typography>
</Box>
<Box></Box>
</Box>
)

}
