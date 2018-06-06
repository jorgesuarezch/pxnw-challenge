/**
 * Login page
 * 
 * Manage all related to the user authentication.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import qs from 'qs';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AUTHORIZE_URL } from '../../lib/api/github';

import Actions from './actions';
import Wrapper from './Wrapper';

class LoginPage extends React.Component {

  componentDidMount() {
    const { search } = window.location;
    const { code } = qs.parse(search.substring(1));
    if (code) {
      this.props.authenticate(code);
    }

    if (this.props.match.params.action === 'auth') {
      this.props.getUserInfo();
    }
  }

  renderLabel(isLoading: boolean) {
    return isLoading ? (<CircularProgress />) : 'Login with Github';
  }

  render() {
    const { login } = this.props.userInfo;
    // TODO: improve redirect handling
    if (login) {
      return (
        <Redirect
          to={`/${login}`}
        />
      )
    }
    return (
      <Wrapper>
        <Button
          href={AUTHORIZE_URL}
          variant="raised"
          size="large"
          color="default"
          disabled={this.props.isAuthenticating}
        >
          {this.renderLabel(this.props.isAuthenticating)}
        </Button>
      </Wrapper>
    )
  }
}

LoginPage.propTypes = {
  isAuthenticating: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  authenticate: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticating: state.Login.isAuthenticating,
  isLoggedIn: state.Login.isLoggedIn,
  userInfo: state.Login.userInfo,
});

const mapDispatchToProps = ({ authenticate, getUserInfo }) => ({
  authenticate,
  getUserInfo,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps(Actions))(LoginPage));
