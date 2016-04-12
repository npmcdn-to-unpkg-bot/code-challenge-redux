import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';

const App = (props) => {
  const { children } = props;

  return (
    <div>
      My App
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

// export default connect(mapStateToProps, {})
export default App;
