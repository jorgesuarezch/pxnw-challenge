/**
 * Gist Navigation
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Pagination from '../../components/Pagination/index';


function Navigation(props) {
  const { items, currentItem, baseUrl } = props;
  const { id, description } = currentItem;
  const position = items.findIndex((item) => (item.id === id));
  const nextPosition = Math.min(items.length - 1, position + 1);
  const prevPosition = Math.max(0, position - 1);

  const nextItem = items[nextPosition] || currentItem;
  const prevItem = items[prevPosition] || currentItem;


  return (
    <Grid
      container
      alignItems="center"
      direction="row"
    >
      <Button
        variant="raised"
        color="default"
        component={Link}
        to={`${baseUrl}`}
      >
        <ArrowBack />View All
      </Button>
      <Typography
        style={{
          flex: 1,
          marginLeft: 30
        }}
      >Gist: {description || '[ No Description ]'}
      </Typography>
      <Pagination
        text={`${position + 1} / ${items.length}`}
        prevDisabled={prevItem.id === currentItem.id}
        nextisabled={nextItem.id === currentItem.id}
        prevUrl={`${baseUrl}/${prevItem.id}`}
        nextUrl={`${baseUrl}/${nextItem.id}`}
      />
    </Grid>
  )
}

Navigation.propTypes = {
  items: PropTypes.array.isRequired,
  currentItem: PropTypes.object.isRequired,
  baseUrl: PropTypes.string.isRequired,
}

export default Navigation;
