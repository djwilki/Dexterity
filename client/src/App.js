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
