import React from 'react';
import CodeArea from '../../CodeArea';
// import { browserHistory } from 'react-router';
import starterCode from '!raw!./starterCode';
console.log(starterCode);

const FundamentalsPage = () => (
  <div>
    <h1>01 - JS Fundamentals</h1>
    <p>JavaScript is cool. Write me some JavaScript, please!</p>
    <CodeArea code={starterCode} />
  </div>
);

export default FundamentalsPage;
