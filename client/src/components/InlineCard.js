import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';


export default function InlineCard({title, text, buttonText, imgSrc}) {


    const useStyles = makeStyles((theme) => ({
        inlineButton: {
            border: '3px solid grey'
        },
        cardText: {
            paddingBottom: '15px'
        },
        cardBox: {
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width: '25vw',
            flexDirection: 'column',
            boxSizing: 'border-box',
            padding:'15px'
        }
      }));

      const classes = useStyles();


return (
    <div style={{display:'flex', flexDirection:'row', padding: '0px', width: '50vw', margin: '0px', padding: '0px'}} >
        <img  style={{maxHeight: '300px', width: '25vw', objectFit: 'cover'}} src='https://images.unsplash.com/photo-1555656220-46e30749d330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'></img>
        <Box
        className={classes.cardBox}
        >
            <Typography variant='h4' className={classes.cardText}>
                {'Dance Therapy'}
            </Typography>
            <Typography variant='div' className={classes.cardText}>
                {'Individualized programs for dancers by physical therapists with dance '}
            </Typography>
            <Button className={classes.inlineButton}>Schedule appointment</Button>
        </Box>
    </div>
)

}