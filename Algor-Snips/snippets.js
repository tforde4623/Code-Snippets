// a function that takes in a string, and returns a string of numbers associated
// with the alphabetic order, ONLY returns a number for letters
const alphabetPosition = (text) => {
  const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z",];
  return text
    .toLowerCase()
    .replace(/[^A-Za-z]/g, "")
    .split("")
    .map(el => {
      return alpha.indexOf(el) + 1;
    })
    .join(" ");
};

// function to return "expanded form" of a number
// expandedForm(123) = "100 + 20 + 3"
function expandedForm(num) {
  return num
    .toString()
    .split('')
    .reverse()
    .map((strNum, index) => {
    return (strNum + "0".repeat(index)).toString();
  })
    .reverse()
    .filter(el => el !== undefined && el > 0)
    .join(' + ');
}

// return factorial of number
// if above 12 || under 0 throw range error
// if 0 return 1
const factorial = n => {
  if(n === 0) { return 1; }
  if(n > 12 || n < 0) { throw new RangeError(); }
  return [...Array(n+1).keys()]
    .filter(el => el !== 0)
    .reverse()
    .reduce((a,b) => a*b);
}

// reverse each word in a string, not the entire string, keep spaces
// ex. "hello world" => "olleh dlrow"
function reverseWords(str) {
  return str.split(' ').map(word => {
    return word.split('').reverse().join('');
  }).join(' ');
}