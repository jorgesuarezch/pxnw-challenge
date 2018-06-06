import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import UserMenu from '../../components/UserMenu';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Navbar extends React.Component {
  render() {
    const { classes, userInfo } = this.props;

    if (!userInfo.login) {
      return (
        <Redirect
          to={`/login/auth`}
        />
      );
    }

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid item xs={1} sm={2}>
              <Typography
                variant="title"
                color="inherit"
              >
                GM
            </Typography>
            </Grid>
            <Grid item xs={10} sm={7}>
              {this.props.children}
            </Grid>
            <Grid
              item
              xs={1}
              sm={3}
            >
              <Grid
                container
                alignItems="center"
                direction="row"
                justify="flex-end"
              >
                <UserMenu
                  id="main-menu"
                  altText={userInfo.login}
                  picture={userInfo.avatar_url}
                >
                  <MenuItem component={Link} to={`/${userInfo.login}`}> My gists </MenuItem>
                  <MenuItem component={Link} to="/add"> Add gist </MenuItem>
                </UserMenu>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  userInfo: state.Login.userInfo,
});

export default withStyles(styles)(connect(mapStateToProps)(Navbar));
