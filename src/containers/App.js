import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';

const App = (props) => {
  const { children } = props;

  return (
    <div>
      <Link to="/challenge">Challenge</Link>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

// export default connect(mapStateToProps, {})
export default App;
