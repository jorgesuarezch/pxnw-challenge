/**
 * GistForm
 */


import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { filesToArray, arrayToFilesObject } from '../../lib/utils/index';
import GistFileItem from '../GistFileItem/index';

class GistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.description,
      files: filesToArray(this.props.files)
    };
  }

  setRemovedFiles(newFiles) {
    return Object.keys(this.props.files).reduce((acc, key) => {
      return {
        ...acc,
        [key]: acc[key] || null,
      }
    }, { ...newFiles });
  }

  onSubmit = () => {
    const { files, description } = this.state;
    const data = {
      description,
      files: this.setRemovedFiles(arrayToFilesObject(files)),
    };

    this.props.onSubmit(data);
  }

  onFilenameChange = (index) => (event) => {
    const files = [...this.state.files];

    files[index] = {
      ...files[index],
      filename: event.target.value,
    };

    this.setState({ files });
  }

  onContentChange = (index) => (value) => {
    const files = [...this.state.files];

    files[index] = {
      ...files[index],
      content: value,
    };

    this.setState({ files });
  }

  onRemoveItem = (index) => () => {
    const { files } = this.state;
    const newFiles = [...files.slice(0, index), ...files.slice(index + 1)];
    this.setState({ files: newFiles });
  }

  renderFiles() {
    const { files } = this.state;

    return files.map(({ filename, content }, index) => (
      <GistFileItem
        key={index}
        filename={filename}
        content={content}
        readOnly={false}
        onFilenameChange={this.onFilenameChange(index)}
        onContentChange={this.onContentChange(index)}
      >
        {index > 0 && (
          <IconButton
            aria-label="remove"
            size="small"
            onClick={this.onRemoveItem(index)}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </GistFileItem>
    ));
  }

  validate = () => {
    // TODO: Validate unique filenames
    return this.state.description.length > 0 &&
      this.state.files.every(file => (file.filename.length && file.content.length));
  }

  onDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  onAddClick = () => {
    this.setState({
      files: [
        ...this.state.files,
        {
          filename: '',
          content: ''
        }
      ]
    });
  }

  render() {
    const isValid = this.validate();
    return (
      <div>
        <div>
          <TextField
            id="description"
            label="Description"
            type="text"
            margin="normal"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
        </div>
        {this.renderFiles()}
        <Toolbar>
          <Grid container justify="space-between">
            <Button
              variant="raised"
              color="default"
              onClick={this.onAddClick}
            >
              ADD FILE
          </Button>
            <Button
              variant="raised"
              color="primary"
              onClick={this.onSubmit}
              disabled={!isValid}
            >
              SAVE
          </Button>
          </Grid>
        </Toolbar>
      </div>
    );
  }
}

GistForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  files: PropTypes.object.isRequired
};

GistForm.defaultProps = {
  description: '',
  files: { '': { content: '' } }
}

export default GistForm;
