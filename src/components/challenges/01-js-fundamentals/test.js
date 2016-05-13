export default function jsFundamentalsTests() {
  var message;
  expect(add).toExist('You must define a function named add');
  expect(add).toBeA(Function, 'Add should be a function.');

  message = 'Add should return sum of its two parameters';
  expect(add(5, 10)).toEqual(15, message);
  expect(add(0, 3)).toEqual(3, message);
  expect(add(0, 0)).toEqual(0, message);
  expect(add(-5, 2)).toEqual(-3, 'Add should work with negative numbers.');

  success();
}
