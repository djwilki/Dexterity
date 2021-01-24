import { Box } from '@material-ui/core';
import React from 'react';
import StaffCard from '../components/StaffCard'


export default function Newsletter(){

return(
<>
    <StaffCard></StaffCard>
    <Box style={{display: 'flex', width: '66vw'}}>
        <StaffCard></StaffCard>
    </Box>
</>
)

}
