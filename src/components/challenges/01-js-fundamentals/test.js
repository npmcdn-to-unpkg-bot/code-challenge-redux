// import expect from 'expect';

export default function jsFundamentalsTests() {
  if (!add) {
    throw new Error('you must create a function named add');
  }
  if (add.constructor !== Function) {
    throw new Error('add should be a function');
  }
  if (add(5, 10) !== 15) {
    throw new Error('add should return sum of its two parameters');
  }
}
