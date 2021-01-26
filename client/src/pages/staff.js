import { Box } from '@material-ui/core';
import React from 'react';
import StaffCard from '../components/StaffCard'


export default function Newsletter(){



return(
<>
    <StaffCard name='Stacy' position='temp' path='../../public/images/pt.jpg'></StaffCard>
    <Box style={{display: 'flex', width: '66vw', justifyContent: 'center'}}>
        <StaffCard name='Stacy' position='temp' path='../../public/images/pt.jpg'></StaffCard>
        <StaffCard name='Stacy' position='temp' path='../../public/images/pt.jpg'></StaffCard>
        <StaffCard name='Stacy' position='temp' path='../../public/images/pt.jpg'></StaffCard>
    </Box>
</>
)

}
