import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { AuthActions } from '../../Authentication/Store';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  normalButton: {
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    "&:hover, &:focus": {
      backgroundColor: "transparent"
    },
  }
}));

const UserMenu = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <IconButton
          color="inherit"
          className={classes.normalButton}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <AccountCircleIcon fontSize="large" />
        </IconButton>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal placement="bottom-end" >
            <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={() => {
                      props.selectView('UserProfile');
                      setOpen(false);
                    }}>
                      My Account
                    </MenuItem>
                    <MenuItem onClick={() => { 
                      props.selectView('Settings');
                      setOpen(false);
                    }}>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={() => {
                      props.logout(props.token);
                      setOpen(false);
                    }}>Logout</MenuItem>
                </MenuList>
                </ClickAwayListener>
            </Paper>
        </Popper>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      isDashboardSelected: state.selectedView === "Dashboard",
      isUserProfileSelected: state.selectedView === "UserProfile",
      isSettingsSelected: state.selectedView === "Settings",
      token: state.token
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      selectView: (view) => {dispatch({type: 'SELECT_VIEW', view: view})},
      logout: (token) => {
        dispatch(AuthActions.logoutUser.request(token));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);