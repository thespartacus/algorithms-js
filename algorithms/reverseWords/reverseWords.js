function reverseWords(string) {
  var stringArray = string.split(' ');

  var reversedArray = [];

  stringArray.forEach(word => {
    var reverseWord = word.split('');;

    var startPivot = 0;
    var endPivot = word.length - 1;

    while(startPivot < endPivot) {
      var temp = reverseWord[startPivot];
      reverseWord[startPivot] = reverseWord[endPivot];
      reverseWord[endPivot] = temp;
      startPivot++;
      endPivot--;
    }

    reverseWord = reverseWord.join('');

    reversedArray.push(reverseWord);
  });

  var reverseWordsResult = reversedArray.join(' ');

  console.log(reverseWordsResult);
  return reverseWordsResult;
}

export default reverseWords;



// Another approach
// function reverseWords(string) {
//   var wordsArr = string.split(' ');
//   var reversedWordsArr = [];
  
//   wordsArr.forEach(word => {
//     var reversedWord = '';
//     for (var i = word.length - 1; i >= 0; i--) {
//       reversedWord += word[i];
//     };
//     reversedWordsArr.push(reversedWord);
//   });
  
//   return reversedWordsArr.join(' ');
// }
 
// reverseWords('Coding JavaScript');
