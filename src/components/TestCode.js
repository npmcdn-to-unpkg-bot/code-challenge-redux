import React, { Component, PropTypes } from 'react';
// import { browserHistory } from 'react-router';

class TestCode extends Component {
  constructor(props) {
    super(props);
  }

  _handleClick() {
    // console.log('run code', this.props.code);
    const evalString = `
      ${this.props.code}
      ${JSON.stringify(this.props.tests)}()
    `;
    console.log('eval string', evalString);
    // eval(evalString);
  }

  render() {
    return (
      <button onClick={this._handleClick}></button>
    );
  }
}

TestCode.propTypes = {
  code: PropTypes.string,
};

export default TestCode;
