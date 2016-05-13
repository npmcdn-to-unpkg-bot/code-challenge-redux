import React, { PropTypes } from 'react';
import CodeArea from '../../CodeArea';

import starterCode from '!raw!./starterCode';
import jsFundamentalsTests from './test.js';

const FundamentalsPage = (props) => (
  <div>
    <h1>01 - JS Fundamentals</h1>
    <p>
      Define a function named <code>add</code> which takes in two parameters and returns
      their sum.
    </p>
    <CodeArea code={starterCode} tests={jsFundamentalsTests} testCode={props.testCode} />
  </div>
);

FundamentalsPage.propTypes = {
  testCode: PropTypes.func,
};

export default FundamentalsPage;
