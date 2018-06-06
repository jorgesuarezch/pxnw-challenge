/**
 * Gist create page
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import GistsForm from '../../components/GistsForm';
import Navbar from '../Navbar';
import Actions from './actions';

class GistCreatePage extends React.Component {
  render() {
    const gist = this.props.gistCreated;
    if (gist.id) {
      return (
        <Redirect
          to={`/${gist.owner.login}/${gist.id}`}
        />
      );
    }

    return (
      <div>
        <Navbar>
          New Gist
        </Navbar>
        <Grid
          container
          justify="center"
        >
          <Grid
            item
            xs={10}
          >
            <GistsForm
              onSubmit={this.props.createGist}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

GistCreatePage.propTypes = {
  createGist: PropTypes.func.isRequired,
  gistCreated: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  gistCreated: state.GistCreate.gist,
});

const mapDispatchToProps = ({ createGist }) => ({
  createGist,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps(Actions))(GistCreatePage));
