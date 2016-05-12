import React, { Component, PropTypes } from 'react';
import CodeMirror from 'codemirror';

// import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/fold/foldgutter.css';

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/wrap/hardwrap';
import 'codemirror/addon/comment/comment';
import 'codemirror/mode/javascript/javascript';

class CodeArea extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
      lineNumbers: true,
      mode: 'javascript',
      matchBrackets: true,
      autoCloseBrackets: true,
      keyMap: 'sublime',
      tabSize: 2,
      theme: 'material',
    });

    this.editor.on('change', this._handleChange);
  }

  _handleChange() {
    console.log('change');
  }

  render() {
    return (
      <div>
        <textarea id="code-editor" defaultValue={this.props.code} />
      </div>
    );
  }
}

CodeArea.propTypes = {
  code: PropTypes.string,
};

export default CodeArea;
