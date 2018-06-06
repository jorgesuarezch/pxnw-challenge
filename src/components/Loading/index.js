/**
 * Loading Component
 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loading.css';

function Loading() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className='Loading'
    >
      <CircularProgress />
    </Grid>
  );
}

export default Loading;
