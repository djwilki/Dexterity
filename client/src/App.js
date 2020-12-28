import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link as RouterLink } from 'react-router-dom';
import UserList from './components/UsersList';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DropDownMenu from './components/DropDownMenu'
import InlineCard from './components/InlineCard'
import Box from '@material-ui/core/Box'
import IconStrip from './components/IconStrip'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: 'inherit',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center'
  },
  inlineCardBox: {
    display: 'flex',
    flexDirection: 'row'
  }
}));





function App() {
  console.log("____Rendering app_____")


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const classes = useStyles();
  return (
    <BrowserRouter>
      <AppBar className={classes.navbar} position="sticky">
        <Toolbar className={classes.navbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button className={classes.menuButton} component={RouterLink} to='/'>HOME</Button>
          <DropDownMenu title="ABOUT" links={[['/staff', 'STAFF']]} ></DropDownMenu>
          <DropDownMenu title="SERVICES" links={[['/physicaltherapy', 'PHYSICAL THERAPY'], ['/telehealth', 'TELEHEALTH']]} ></DropDownMenu>
          <Button component={RouterLink} to='/education'>EDUCATION</Button>
          <Button component={RouterLink} to='/info'>INFO</Button>
          <Button component={RouterLink} to='/contact'>CONTACT</Button>
        </Toolbar>


      </AppBar>
      <Box
      display='flex'
      flexWrap='nowrap'
      justifyContent='center'
      >
        <Typography variant="h3" fontStyle='italic' component="h2" gutterBottom>
        <i style={{color: 'violet' }}>{'Patient Wellness is our Priority'}</i>
      </Typography>

      </Box>
      <Box className={classes.inlineCardBox}>
        <InlineCard imgSrc='https://images.unsplash.com/photo-1555656220-46e30749d330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80' title='Dance Therapy' text='Individualized programs for dancers by physical therapists with dance' buttonText='Schedule appointment'></InlineCard>
        <InlineCard imgSrc='https://images.unsplash.com/photo-1555656220-46e30749d330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80' title='Dance Therapy' text='Individualized programs for dancers by physical therapists with dance' buttonText='Schedule appointment'></InlineCard>
      </Box>
      <IconStrip></IconStrip>
      {/* <nav>
            <ul>
                <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/users">
                <UserList />
            </Route>

            <Route path="/">
                <h1>My Home Page</h1>
            </Route>
        </Switch> */}
    </BrowserRouter>
  );
}

export default App;
