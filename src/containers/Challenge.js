import React, { Component, PropTypes } from 'react';
import { testCodeIfNeeded } from '../actions';
import { connect } from 'react-redux';
import TestStatus from '../components/TestStatus';

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.testCode = this.testCode.bind(this);
  }

  testCode(code, tests) {
    const { dispatch } = this.props;

    dispatch(testCodeIfNeeded(code, tests));
  }

  render() {
    return (
      <div>
        <h1>{this.props.params.name}</h1>
        {this.props.children && React.cloneElement(this.props.children, {
          testCode: this.testCode,
        })}
        <TestStatus
          pass={this.props.pass}
          err={this.props.err}
          isExecuting={this.props.isExecuting}
        />
      </div>
    );
  }
}

Challenge.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  params: PropTypes.object,
  dispatch: PropTypes.func,
  pass: PropTypes.bool,
  isExecuting: PropTypes.bool,
  err: PropTypes.objectOf(PropTypes.string),
};

function mapStateToProps(state, props) {
  const { challenge } = state;
  return Object.assign({}, props, challenge);
}

export default connect(mapStateToProps)(Challenge);
