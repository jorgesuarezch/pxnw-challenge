/**
 * GistFileList Component
 */
import React from 'react';
import GistFileItem from '../GistFileItem/index';
import { PropTypes } from 'prop-types';


function GistFileList(props) {
  const { files } = props;
  return (
    <div>
      {Object.keys(files).map((filename) => (
        <GistFileItem
          key={filename}
          filename={filename}
          content={files[filename].content}
        />
      ))}
    </div>
  );
}

GistFileList.propTypes = {
  files: PropTypes.object.isRequired,
};


export default GistFileList;
