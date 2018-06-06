/**
 * Gist page
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

import GistFileList from '../../components/GistFileList/index';
import GistsForm from '../../components/GistsForm/index';
import Loading from '../../components/Loading/index';
import Navbar from '../Navbar';
import HomeActions from '../HomePage/actions';
import Navigation from './Navigation';
import Actions from './actions';


class GistPage extends React.Component {
  state = {
    isEditing: false
  }
  componentDidMount() {
    const {
      gists,
      match,
      loadGist,
      loadGists,
    } = this.props;

    const { gistId, username } = match.params;

    loadGist(gistId);

    // if user lands directly to this page. gists list is populated
    if (gists.length === 0) {
      loadGists(username);
    }
  }

  componentWillReceiveProps(nextProps) {
    const currentGistId = this.props.match.params.gistId;
    const newGistId = nextProps.match.params.gistId;

    if (currentGistId !== newGistId) {
      this.props.loadGist(newGistId);
    }

    if(this.props.updatingGist && !nextProps.updatingGist) {
      this.setState({
        isEditing: false,
      })
    }

  }

  onEditToggle = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  onSubmitHandler = (payload) => {
    const { currentGist, updateGist } = this.props;

    updateGist(
      currentGist.id,
      payload
    );

  }

  render() {
    const { match, currentGist, loadingGist } = this.props;
    const { username } = match.params;
    const { isEditing } = this.state;

    return (
      <div>
        <Navbar>
          <Navigation
            currentItem={currentGist}
            items={this.props.gists}
            baseUrl={`/${username}`}
          />
        </Navbar>
        {loadingGist && (<Loading />)}
        {!loadingGist && (
          <Grid
            container
            justify="center"
          >
            <Grid
              item
              xs={10}
            >
              <Toolbar>
                <Button
                  variant="raised"
                  color="default"
                  onClick={this.onEditToggle}
                >
                  {isEditing ? 'CANCEL' : 'EDIT'}
                </Button>
              </Toolbar>
              {isEditing && (
                <GistsForm
                  description={currentGist.description}
                  files={currentGist.files}
                  onSubmit={this.onSubmitHandler}
                />
              )}
              {!isEditing && (
                <GistFileList
                  files={this.props.currentGist.files}
                />
              )}
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

GistPage.propTypes = {
  currentGist: PropTypes.object.isRequired,
  loadingGist: PropTypes.bool.isRequired,
  updatingGist: PropTypes.bool.isRequired,
  gists: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loadGist: PropTypes.func.isRequired,
  updateGist: PropTypes.func.isRequired,
  loadGists: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  currentGist: state.Gist.gist,
  loadingGist: state.Gist.loading,
  updatingGist: state.Gist.updatingGist,
  gists: state.Home.gists,
});

const mapDispatchToProps = ({ loadGist, updateGist }, homeActions) => ({
  loadGist,
  updateGist,
  loadGists: homeActions.loadGists,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps(Actions, HomeActions))(GistPage));
