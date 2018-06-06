/**
 * GistFileItem Component
 */

import React from 'react';
import PropTypes  from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import { noop } from '../../lib/utils/index';

import Editor from '../Editor';

function GistFileItem(props) {
  const { filename, content } = props;
  return (
    <div>
      <TextField
        label="Filename"
        type="text"
        margin="normal"
        value={filename}
        disabled={props.readOnly}
        onChange={props.onFilenameChange}
      />
      {props.children}
      <Divider />
      <Editor
        name={filename}
        value={content}
        minLines={10}
        maxLines={20}
        readOnly={props.readOnly}
        onChange={props.onContentChange}
      />
    </div>
  );
}

GistFileItem.propTypes = {
  filename: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  onFilenameChange: PropTypes.func.isRequired,
  onContentChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};


GistFileItem.defaultProps = {
  readOnly: true,
  onFilenameChange: noop,
  onContentChange: noop,
}

export default GistFileItem;
