import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'


export default function Carousel(){

    const useStyles = makeStyles((theme) => ({
        carousel: {
            display:'flex',
            flexDirection: 'row',
            overflow: 'hidden',
            width: 'fit-content'
        },
        carouselImage: {
            width:'100vw',
            objectFit:'cover',
            maxHeight: '50vh',
            minHeight: '50px'
        }
      }));

      const classes = useStyles();

    return(
        <>
        <Box className={classes.carousel}>
            <img className={classes.carouselImage} src='https://cdn.pixabay.com/photo/2018/06/02/18/22/fitness-3448864_960_720.jpg'></img>
            <img className={classes.carouselImage} src='https://cdn.pixabay.com/photo/2020/05/30/18/05/trauma-5239844_960_720.jpg'></img>
            <img className={classes.carouselImage} src='https://cdn.pixabay.com/photo/2017/07/25/16/49/manual-release-2538802_960_720.jpg'></img>
        </Box>
        <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button style={{position: 'relative', transform: 'translateY(-250%)', color: 'white', fontWeight: 'bold', fontSize: '50px', borderRadius: '50px'}}>{'<'}</Button>
        <Button style={{position: 'relative', transform: 'translateY(-250%)', color: 'white', fontWeight: 'bold', fontSize: '50px'}}>{'>'}</Button>
        </Box>
        </>
    )
}
