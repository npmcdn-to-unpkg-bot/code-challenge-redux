import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Challenge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.params.name}</h1>
        {this.props.children}
      </div>
    );
  }
}

Challenge.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  params: PropTypes.object,
};

function mapStateToProps(store, props) {
  return Object.assign({}, props, store);
}

export default connect(mapStateToProps)(Challenge);
// export default Challenge;
