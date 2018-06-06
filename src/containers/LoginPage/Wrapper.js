/**
 * Wrapper
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    height: '100vh',
  },
});

function Wrapper(props) {
  return (
    <Grid container className={props.classes.root}>
      <Grid item xs={12}>
        <Grid
          container
          spacing={16}
          className={props.classes.wrapper}
          alignItems="center"
          direction="row"
          justify="center"
        >
          <Grid item>
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

Wrapper.propTypes = {
  classes: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
}

export default withStyles(styles)(Wrapper);
