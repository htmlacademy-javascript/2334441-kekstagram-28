const isVeryBig = (string, length) =>
  string.length <= length;

isVeryBig('eqtyi', 21);


const isPalindrome = (string) =>{
  const lowString = string.toLowerCase().replace(/\s/g, '');
  for (let i = 0; i <= (lowString.length + 1) / 2; i++) {
    if (lowString[i] !== lowString[lowString.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
isPalindrome('3142');


const extractNumbers = (string) => {
  let onlyNumbers = ' ';
  let isFirstZero = true;
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] >= 0) {
      if (isFirstZero && string[i] === '0') {
        isFirstZero = true;
      } else {
        isFirstZero = false;
        onlyNumbers += string[i];
      }
    }
  }
  return onlyNumbers;
};
extractNumbers('2');

function isSymbolsEnough(string, minLength, addString) {
  if (string.length >= minLength) {
    return string;
  }

  let newString = '';
  const remainingChars = minLength - string.length;

  for (let i = 0; i < remainingChars; i++) {
    const charToAdd = addString[(addString.length + i) % addString.length];
    newString += charToAdd;
  }
  string = newString + string;
  return string;
}
isSymbolsEnough('asfaf', 12, 'aaz');
