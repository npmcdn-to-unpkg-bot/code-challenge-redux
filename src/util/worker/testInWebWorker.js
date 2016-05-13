import workerCode from '!raw!./worker';
const EXECUTION_TIMEOUT = 2000;

/**
 * createWorker creates a file-like object of immutable, raw data.
 * this can be used in place of a relative path so that a trip to the
 * server for the worker code doesn't need to be made.
 */
function createWorker() {
  // Build a worker from an anonymous function body
  const blobURL = URL.createObjectURL(
    new Blob([
      '(function(){',
      workerCode,
      '})()',
    ], {
      type: 'application/javascript',
    })
  );

  const worker = new Worker(blobURL);

  // Won't be needing this anymore
  URL.revokeObjectURL(blobURL);

  return worker;
}

export default function testInWebWorker(code, tests, done) {
  const worker = createWorker();

  const timeout = setTimeout(() => {
    done({
      err: {
        message: 'Your code took too long to execute. You may have an infinite loop.',
      },
    });
    worker.terminate();
  }, EXECUTION_TIMEOUT);

  worker.onmessage = e => {
    clearTimeout(timeout);
    done({err: e.data.err});
  };



  const message = { code, tests };
  worker.postMessage(message);
}
