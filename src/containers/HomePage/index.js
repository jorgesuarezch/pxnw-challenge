/**
 * Home page
 * 
 * TODO: Add pagination, filters
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import List from '../../components/List'
import Loading from '../../components/Loading';
import Navbar from '../Navbar';
import Actions from './actions';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    const { username } = props.match.params;
    this.state = {
      username
    }
  }

  componentDidMount() {
    const { username } = this.state;
    this.props.loadGists(username);
  }

  onUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  onSearch = () => {
    const { username } = this.state;
    this.props.loadGists(username);
    this.props.history.push(`/${username}`)
  }

  render() {
    const { loading, location } = this.props;
    const items = this.props.gists.map(({ created_at, description, id }) => (
      {
        id,
        label: description || '[ No description ]',
        description: created_at,
        to: `${location.pathname}/${id}`
      }
    ));

    return (
      <div>
        <Navbar>
          <Grid container>
            <Input
              style={{
                flex: 1,
              }}
              onChange={this.onUsernameChange}
              value={this.state.username}
              inputProps={{
                placeholder: 'Type a username to see its gists',
              }}
            />
            <IconButton
              onClick={this.onSearch}
              color="primary"
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Grid>
        </Navbar>
        {loading && (<Loading />)}
        {!loading && (<List items={items} />)}
      </div>
    );
  }
}

HomePage.propTypes = {
  gists: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  loadGists: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};


const mapStateToProps = state => ({
  gists: state.Home.gists,
  loading: state.Home.loading,
});

const mapDispatchToProps = ({ loadGists }) => ({
  loadGists,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps(Actions))(HomePage));
