/**
 * List Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import UiList from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function List(props) {
  return (
    <UiList component="div">
      {
        props.items.map((item) => (
          <div key={item.id}>
            <ListItem
              button
              component={Link}
              to={item.to}
            >
              <ListItemText
                primary={item.label}
                secondary={item.description}
              />
            </ListItem>
            <Divider />
          </div>
        ))
      }
    </UiList>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      }
    )).isRequired,
};

export default List;
