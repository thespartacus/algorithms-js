function isPalindrome(phrase) {
  var lowerCasePhrase = phrase.toLowerCase();
  var phraseArray = lowerCasePhrase.split('');

  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var alphabetsArray = [];

  phraseArray.forEach(letter => {
    if (validCharacters.indexOf(letter) > -1) {
      alphabetsArray.push(letter);
    }
  });

  console.log(alphabetsArray.join('') === alphabetsArray.reverse().join(''));
  return alphabetsArray.join('') === alphabetsArray.reverse().join('');
}


export default isPalindrome;
