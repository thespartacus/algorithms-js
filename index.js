import fizzbuzz from "./algorithms/fizzbuzz/fizzbuzz.js";
import harmlessRansomNote from "./algorithms/harmlessRansomNote/harmlessRansomNote.js";
import isPalindrome from "./algorithms/isPalindrome/isPalindrome.js";
import caeserCipher from "./algorithms/caeserCipher/caeserCipher.js";
import reverseWords from "./algorithms/reverseWords/reverseWords.js";
import reverseArrayInPlace from "./algorithms/reverseArrayInPlace/reverseArrayInPlace.js";
import meanMedianMode from "./algorithms/meanMedianMode/meanMedianMode.js";
import twoSum from "./algorithms/twoSum/twoSum.js";

fizzbuzz(20);

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');

isPalindrome("Madam, I'm Adam");

caeserCipher(-26, 'book vault');

reverseWords('this is a string of words');
reverseWords('Coding Javascript');

reverseArrayInPlace([1,2,3,4,6,7]);

meanMedianMode([1,2,3,4,5,4,6,1]);

twoSum([1, 6, 4, 5, 3, 3], 7);
