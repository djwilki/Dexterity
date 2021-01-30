import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import Maps from './Maps';
import { Input } from '@material-ui/core'
import {Button } from '@material-ui/core'

export default function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');


    const useStyles = makeStyles((theme) => ({
        fullWidth: {
            fullWidth: 'true'
        },

    }));

    const classes = useStyles();


    const sendEmail = () => {

    }


    return (
        <Box style={{ display: 'flex', flexDirection: 'row' }}>

            <Box style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography>contact us</Typography>
                <Typography>-</Typography>
                <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Input type='email' fullWidth='true' placeholder='Email' />
                    <div>&nbsp;</div>
                    <Input type='text' fullWidth='true' placeholder='Name' />
                </Box>
                <Box style={{ width: '50%'}}>
                <Input type='text' placeholder='Title' fullWidth='true' classes={classes.fullWidth}/>
                <Input type='textarea' placeholder='Message' fullWidth='true' multiline='true' rows={16} classes={classes.fullWidth}/>
                </Box>
                <Button>Send</Button>
            </Box>

            <Box style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography>visit us</Typography>
                <Typography>-</Typography>
                <Typography>Monday - Friday</Typography>
                <Typography>10:00 AM - 10:05 PM</Typography>
                <Maps />
                <Typography>Phone # 888-888-8888</Typography>
                <Typography>Fax # 888-888-8888</Typography>
                <Typography>1 California Dr</Typography>
                <Typography>California, CA 94087</Typography>
            </Box>
            <Box></Box>
        </Box>
    )

}
