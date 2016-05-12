
export function spawnWorker() {
  window.webWorker = new Worker('js/worker.js');
  window.webWorker.onmessage = e => {
    if (e.data.message) {
      // renderErr(e.data.lineNumber, e.data.message);
      console.log(e.data.message);
    }
    clearTimeout(ps);
  };
}

export function killWorker() {
  window.webWorker.terminate();
  // renderErr(1, 'The code is taking a while. You might have an infinite loop.');
  spawnWorker();
}
