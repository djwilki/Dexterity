import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link as RouterLink } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'


export default function DropDownMenu({links, title, }) {


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };

    const items = links.map(ele => {
         return <MenuItem component={RouterLink} to={ele[0]} onClick={handleClose}>{ele[1]}</MenuItem>
        })





return (
    <div onMouseLeave={handleClose}>
        <Button aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClick}>
        {title}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
            style: {

            },
          }}
        MenuListProps={{ onMouseLeave: handleClose,
        children: items
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {title.length > 0 ? <>{items}</>: <></>}
      </Menu>
    </div>
)

}
