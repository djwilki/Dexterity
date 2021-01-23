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
            flexDirection: 'column',
            boxSizing: 'border-box',
            padding:'15px',
            width: '25vw',
        }
      }));

      const classes = useStyles();


return (
    <div style={{display:'flex', flexDirection:'row', padding: '0px', width: '50vw', margin: '0px', padding: '0px'}} >
        <img  style={{maxHeight: '300px', width: '25vw', objectFit: 'cover'}} src={imgSrc}></img>
        <Box className={classes.cardBox}>
            <Typography variant='h4' className={classes.cardText}>
                {title}
            </Typography>
            <Typography variant='div' className={classes.cardText}>
                {text}
            </Typography>
            <Button className={classes.inlineButton}>{buttonText}</Button>
        </Box>
    </div>
)

}
