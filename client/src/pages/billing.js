import React from 'react';
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import { Box } from '@material-ui/core';


export default function Billing(){


    const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');


return(
    <Box style={{height: '300px'}}>
<Elements stripe={stripePromise} >
    <CheckoutForm/>
    </Elements>
    </Box>
)

}
