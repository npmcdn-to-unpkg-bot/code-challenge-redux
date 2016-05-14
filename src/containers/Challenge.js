import React, { Component, PropTypes } from 'react';
import { testCodeIfNeeded } from '../actions/test';
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
    const { user, challenge } = this.props;
    // TODO: Lock this view down when not logged in
    return (
      <div>
        <h1>{this.props.params.name}</h1>
        {this.props.children && React.cloneElement(this.props.children, {
          testCode: this.testCode,
        })}
        <TestStatus
          pass={challenge.pass}
          err={challenge.err}
          isExecuting={challenge.isExecuting}
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
  challenge: PropTypes.object,
  user: PropTypes.object,
  // pass: PropTypes.bool,
  // isExecuting: PropTypes.bool,
  // err: PropTypes.objectOf(PropTypes.string),
};

function mapStateToProps(state, props) {
  // const { challenge, user } = state;
  return Object.assign({}, props, state);
}

export default connect(mapStateToProps)(Challenge);
