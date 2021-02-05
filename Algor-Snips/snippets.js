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
