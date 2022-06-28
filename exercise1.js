const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

 const flatten = (arrays) => arrays.reduce((acc, array) => acc.concat(array));

 console.log(flatten(arrays));
