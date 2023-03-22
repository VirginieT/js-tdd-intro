const assert = require('assert');

//! CAPITALIZE FIRST LETTER OF A STRING
const capitalizeFirst = (input) => {
  if (input.length === 0) {
    return '';
  }
  return input[0].toUpperCase() + input.slice(1);
};

// function capitalizeFirst(input) {
//   return input.length > 0
//     ? input[0].toUpperCase() + input.slice(1)
//     : '';
// }
console.log(capitalizeFirst('je suis ton père'));

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, 'function');

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');



//! CAPITALIZE FIRST LETTER OF EACH WORD IN A STRING

const capitalizeFirstLetters = (input) => {
  if (input.length === 0) {
    return '';
  }
  const words = input.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    result += capitalizeFirst(words[i]);
    if (i < words.length - 1) {
      result += ' ';
    }
  }
  return result;
};
console.log(capitalizeFirstLetters('je suis pas venue ici pour souffrir okay ?!'));


/* Commence par créer les tests, avec au moins trois cas de test :
une chaîne avec plusieurs mots
une chaîne avec un seul mot (voire une seule lettre)
une chaîne vide
*/

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

