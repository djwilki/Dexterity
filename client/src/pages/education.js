import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Box } from '@material-ui/core';
import InlineCard from '../components/InlineCard'
import TextStrip from '../components/TextStrip';


export default function Education(){


    const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');


return(
    <Box>
        <InlineCard title='Education'></InlineCard>
        <TextStrip></TextStrip>
    </Box>
)

}
