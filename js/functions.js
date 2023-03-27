/*Функция для проверки длины строки. Она принимает строку, которую нужно проверить,
и максимальную длину и возвращает true, если строка меньше или равна указанной длине,
и false, если строка длиннее. Эта функция нам пригодится для валидации формы.
Примеры использования функции:

// Cтрока короче 20 символов
имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
имяФункции('проверяемая строка', 10); // false

*/
const isVeryBig = (string, length) =>
string.length <= length ? true:false;
console.log(isVeryBig('проверяемая строка', 20));
console.log(isVeryBig('проверяемая строка', 18));
console.log(isVeryBig('проверяемая строка', 10));


    /*Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево. Например:

// Строка является палиндромом
имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
// Это не палиндром
имяФункции('Кекс');  // false
Если хотите усложнить задание, предусмотрите случай, когда в строке встречаются пробелы. Они не должны учитываться при проверке!

// Это палиндром
имяФункции('Лёша на полке клопа нашёл '); // true
*/
const isPalindrome = (string) =>
{
	let lowString = string.toLowerCase().replace(/\s/g, '');
		for (let i = 0; i <= (lowString.length + 1) /2; i++)
    {
    if (lowString[i] !== lowString[lowString.length - 1 - i])
      {
      return false;
      }
    }
  return true;
}
console.log(isPalindrome('ДоВОд')); // true
console.log(isPalindrome('Кекс')); // false
console.log(isPalindrome('а роза упала на лапу азора')); // true


/*Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN
Если хотите усложнить задание, предусмотрите случай, когда вместо строки приходит число:

имяФункции(2023); // 2023
имяФункции(-1);   // 1
имяФункции(1.5);  // 15
*/

const extractNumbers = (string) =>
{
let onlyNumbers = ' ';
let isFirstZero = true;
for (let i = 0; i <= string.length - 1; i++)
  {
	if (string[i] >= 0)
    {

   if (isFirstZero&&string[i] === '0')
      {
        isFirstZero = true;
      } else
        {
        isFirstZero = false;
        onlyNumbers += string[i];
		    }
    }
  }
return onlyNumbers;

}
console.log(extractNumbers('as00as0159'));
console.log(extractNumbers('-1'));
console.log(extractNumbers('as00as01.59'));


/*Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.

Эта функция нам пригодится для формирования адресов файлов. Примеры её использования:

// Добавочный символ использован один раз
имяФункции('1', 2, '0');      // '01'

// Добавочный символ использован три раза
имяФункции('1', 4, '0');      // '0001'

// Добавочные символы обрезаны с конца
имяФункции('q', 4, 'werty');  // 'werq'

// Добавочные символы использованы полтора раза
имяФункции('q', 4, 'we');     // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
имяФункции('qwerty', 4, '0'); // 'qwerty'
Попробуйте не использовать при этом функцию padStart() =)
*/
//функция добавляет символы в обратном порядке
/*const isSymbolsEnoughReverse = (string, minLength, addString) =>
{
  let newString = string;
  let newAddString = addString;
  let i = 0;
    while (i + string.length + 1 <= minLength)
    {
    newString = newAddString[i] + newString;
    newAddString += newAddString[i];
    i++;
    }
  return newString;
}

console.log(isSymbolsEnoughReverse('qwrwqr', 10, 'фыв'));
console.log(isSymbolsEnoughReverse('q', 4, 'we'));
console.log(isSymbolsEnoughReverse('qwerty', 4, '0'));*/

function isSymbolsEnough(string, minLength, addString) {
  if (string.length >= minLength) {
    return string;
  }

  let newString = "";
  let remainingChars = minLength - string.length;

  for (let i = 0; i < remainingChars; i++) {
    let charToAdd = addString[(addString.length+i) % addString.length];
    newString += charToAdd;
  }
  string = newString + string;
  return string;
}

console.log(isSymbolsEnough('qwrwqr', 10, 'фыв'));
console.log(isSymbolsEnough('q', 4, 'we'));
console.log(isSymbolsEnough('qwerty', 4, '0'));

