import React, { Component, PropTypes } from 'react';
import CodeMirror from 'codemirror';

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
    this.runTestsShortcut = this.runTestsShortcut.bind(this);
    this.runTests = this.runTests.bind(this);
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

    window.addEventListener('keypress', this.runTestsShortcut);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.runTestsShortcut);
  }

  runTestsShortcut(e) {
    if (e.ctrlKey && e.keyCode === 18) {
      this.runTests();
    }
  }

  runTests() {
    const { testCode, tests } = this.props;
    testCode(this.editor.getValue(), tests.toString());
  }

  render() {
    return (
      <div>
        <textarea id="code-editor" defaultValue={this.props.code} />
        <button onClick={this.runTests}>Submit</button>
        <div>
          {this.props.err ? this.props.err.message : ''}
        </div>
      </div>
    );
  }
}

CodeArea.propTypes = {
  code: PropTypes.string,
  tests: PropTypes.func,
  testCode: PropTypes.func,
  err: PropTypes.string,
};

export default CodeArea;
