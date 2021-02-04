import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Box } from '@material-ui/core';
import InlineCard from '../components/InlineCard'
import TextStrip from '../components/TextStrip';


export default function Education(){


    const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');


return(
    <Box>
        <InlineCard title='Education' buttonText='test' imgSrc='data:image/jpeg;base64,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'></InlineCard>
        <TextStrip text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></TextStrip>
    </Box>
)

}
