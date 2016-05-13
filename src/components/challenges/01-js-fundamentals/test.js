// import expect from 'expect';

export default function jsFundamentalsTests() {
  if (!add) {
    throw new Error('You must create a function named add.');
  }
  if (add.constructor !== Function) {
    throw new Error('Add should be a function.');
  }
  if (add(5, 10) !== 15) {
    throw new Error('Add should return sum of its two parameters.');
  }
  if (add(0, 3) !== 3) {
    throw new Error('Add should return sum of its two parameters');
  }
  if (add(0, 0) !== 0) {
    throw new Error('Add should return sum of its two parameters');
  }
  if (add(-5, 2) !== -3) {
    throw new Error('Add should work with negative numbers.');
  }
  success()
}
