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

function runTestsShortcut(e) {
  if (e.ctrlKey && e.keyCode === 18) {
    this._testCode();
  }
}

class CodeArea extends Component {
  constructor(props) {
    super(props);
    this.state = this._getInitialState();
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

    window.addEventListener('keypress', runTestsShortcut.bind(this));

    // this.editor.on('change', this._handleChange);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', runTestsShortcut);
  }

  _getInitialState() {
    return {
      err: undefined,
    }
  }

  _testCode() {
    const evalString = `
      ${this.editor.getValue()}
      (${this.props.tests.toString()})()
    `;
    let err;

    try {
      eval(evalString);
    } catch (e) {
      err = e;
    } finally {
      this.setState({
        err,
      });
    }
  }

  render() {
    return (
      <div>
        <textarea id="code-editor" defaultValue={this.props.code} />
        <button onClick={() => this._testCode()}>Submit</button>
        <div>
          {this.state.err ? this.state.err.message : ''}
        </div>
      </div>
    );
  }
}

CodeArea.propTypes = {
  code: PropTypes.string,
  tests: PropTypes.function,
};

export default CodeArea;
