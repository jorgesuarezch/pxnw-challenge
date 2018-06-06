import React from 'react';
import AceEditor from 'react-ace';

import 'brace/theme/github';

// TODO add support for multiple languages.
class Editor extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <AceEditor
        {...props}
      />
    );
  }
}

Editor.defaultProps = {
  theme: 'github',
  name: 'file-editor',
  fontSize: 14,
  width: "100%",
  showPrintMargin: false,
  showGutter: true,
  highlightActiveLine: false,
  editorProps: { $blockScrolling: 'Inifinity' },
  enableBasicAutocompletion: false,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  setOptions: {
    showLineNumbers: true,
    tabSize: 2,
  }
}

export default Editor;
