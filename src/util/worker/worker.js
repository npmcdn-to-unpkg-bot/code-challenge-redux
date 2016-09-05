onmessage = function(message) {
  var evalString = message.data.code + '\n(' + message.data.tests + ')()';

  var err;
  let pass = false;
  importScripts('https://unpkg.com/expect@1.20.1/umd/expect.min.js');

  function success() {
    pass = true;
  }

  try {
    eval(evalString);
  } catch (e) {
    var stack = e.stack;
    // firefox || chrome
    var errMessage = e.message || stack.match(/.*/)[0];
    // firefox || safari || chrome
    var lineNum = e.lineNumber || e.line || stack.match(/<anonymous>:(\d+):\d+/)[1];
    err = { message: errMessage, lineNum };
  } finally {
    if (!err && !pass) {
      err = {
        message: 'The tests did not complete. You might have a return statement before your code.',
      };
    }
    postMessage({ err });
  }
};
