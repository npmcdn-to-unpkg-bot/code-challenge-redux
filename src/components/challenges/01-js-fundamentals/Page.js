import React from 'react';
import CodeArea from '../../CodeArea';

import starterCode from '!raw!./starterCode';
import jsFundamentalsTests from './test.js';

const FundamentalsPage = () => (
  <div>
    <h1>01 - JS Fundamentals</h1>
    <p>JavaScript is cool. Write me some JavaScript, please!</p>
    <CodeArea code={starterCode} tests={jsFundamentalsTests} />
  </div>
);

export default FundamentalsPage;
