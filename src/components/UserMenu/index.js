/**
 * Menu component
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

class UserMenu extends React.Component {
  state = {
    element: null,
  }

  handleMenu = (event) => {
    this.setState({ element: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ element: null });
  };

  render() {
    const { element } = this.state;
    const open = Boolean(element);
    return (
      <div>
        <IconButton
          aria-owns={open ? this.props.id : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <Avatar
            alt={this.props.altText}
            src={this.props.picture}
          />
        </IconButton>
        <Menu
          id={this.props.id}
          anchorEl={element}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          {this.props.children}
        </Menu>
      </div>
    );
  }
}

UserMenu.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
}

export default UserMenu;
