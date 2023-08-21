function caeserCipher(shiftNumber, inputString) {
  var lowerCaseInput = inputString.toLowerCase();
  var inputArray = lowerCaseInput.split('');
  var shiftingArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var ceaserCipherArray = [];

  inputArray.forEach(letter => {
    if (shiftingArray.indexOf(letter) > -1) {
      var shiftBy = (shiftingArray.indexOf(letter) + shiftNumber) % shiftingArray.length;
      if (shiftNumber >= 0) {
        ceaserCipherArray.push(shiftingArray[shiftBy]);

      } else {
        if (shiftingArray[shiftBy]) {
          ceaserCipherArray.push(shiftingArray[shiftBy]);

        } else {
          ceaserCipherArray.push(shiftingArray[shiftBy + 26])
        }
      }

    } else {
      ceaserCipherArray.push(letter);
    }
  });

  console.log(ceaserCipherArray.join(''));
  return ceaserCipherArray.join();
}


// Another approach
// function caesarCipher(str,num) {
//   num = num % 26;
//   var lowerCaseString = str.toLowerCase();
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   var newString = '';
  
//   for (var i = 0; i < lowerCaseString.length; i++) {
//     var currentLetter = lowerCaseString[i];
//     if (currentLetter === ' ') {
//       newString += currentLetter;
//       continue;
//     }
//     var currentIndex = alphabet.indexOf(currentLetter);
//     var newIndex = currentIndex + num;
//     if (newIndex > 25) newIndex = newIndex - 26;
//     if (newIndex < 0) newIndex = 26 + newIndex;
//     if (str[i] === str[i].toUpperCase()) {
//       newString += alphabet[newIndex].toUpperCase();
//     }
//     else newString += alphabet[newIndex];
//   };
  
//   return newString;
// }

export default caeserCipher;
