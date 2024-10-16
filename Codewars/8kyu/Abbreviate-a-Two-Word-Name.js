// DESCRIPTION
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F
// SOLUTION

function abbrevName(name) {
  const abbrevArr = name.split(' ');
  console.log(abbrevArr);
  return `${abbrevArr[0][0].toUpperCase()}.${abbrevArr[1][0].toUpperCase()}`;
}

console.log(abbrevName('Sam Harris'));
