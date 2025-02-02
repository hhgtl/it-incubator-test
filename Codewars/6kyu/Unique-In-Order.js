// DESCRIPTION
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
// SOLUTION

var uniqueInOrder = function (iterable) {
  let uniqueArr = [];
  for (let i = 0; i <= iterable.length - 1; i++) {
    if (uniqueArr[uniqueArr.length - 1] !== iterable[i]) {
      uniqueArr.push(iterable[i]);
    }
  }
  return uniqueArr;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
