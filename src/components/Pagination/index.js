import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import './styles.css';

function Pagination(props) {
  return (
    <div className="Pagination">
      <Typography>{props.text}</Typography>
      <Button
        component={Link}
        disabled={props.prevDisabled}
        to={props.prevUrl}
      >
        <ChevronLeft />Prev
      </Button>
      <Button
        component={Link}
        disabled={props.nextDisabled}
        to={props.nextUrl}
      >
        Next <ChevronRight />
      </Button>
    </div>
  )
}

Pagination.propTypes = {
  text: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
  prevUrl: PropTypes.string.isRequired,
  nextDisabled: PropTypes.bool.isRequired,
  prevDisabled: PropTypes.bool.isRequired,
}

Pagination.defaultProps = {
  nextDisabled: false,
  prevDisabled: false,
}

export default Pagination;
