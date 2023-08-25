import fizzbuzz from "./algorithms/fizzbuzz/fizzbuzz.js";
import harmlessRansomNote from "./algorithms/harmlessRansomNote/harmlessRansomNote.js";
import isPalindrome from "./algorithms/isPalindrome/isPalindrome.js";
import caeserCipher from "./algorithms/caeserCipher/caeserCipher.js";
import reverseWords from "./algorithms/reverseWords/reverseWords.js";
import reverseArrayInPlace from "./algorithms/reverseArrayInPlace/reverseArrayInPlace.js";
import meanMedianMode from "./algorithms/meanMedianMode/meanMedianMode.js";
import twoSum from "./algorithms/twoSum/twoSum.js";
import binarySearch from "./algorithms/binarySearch/binarySearch.js";
import fibonacci from "./algorithms/fibonacci/fibonacci.js";
import fibMemo from "./algorithms/fibMemo/fibMemo.js";
import sieveOfEratosthenes from "./algorithms/sieveOfEratosthenes/sieveOfEratosthenes.js";
import copy from "./algorithms/deepCopy/deepCopy.js";
import bubbleSort from "./algorithms/bubbleSort/bubbleSort.js";
import mergeSort from "./algorithms/mergeSort/mergeSort.js";
import maxStockProfit from "./algorithms/maxStockProfit/maxStockProfit.js";

fizzbuzz(20);

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');

isPalindrome("Madam, I'm Adam");

caeserCipher(-26, 'book vault');

reverseWords('this is a string of words');
reverseWords('Coding Javascript');

reverseArrayInPlace([1,2,3,4,6,7]);

meanMedianMode([1,2,3,4,5,4,6,1]);

twoSum([1, 6, 4, 5, 3, 3], 7);

binarySearch([1,2,3,4,5,6,7], 7);

fibonacci(5);

fibMemo(5);

sieveOfEratosthenes(20);

copy([1, 'a', true, {}, [], new Object()]);

bubbleSort([5, 3, 8, 2, 1, 4]);
bubbleSort([20, 20, 31, 56, 1, 12, 12]);
bubbleSort([3, -9, -12, -1, 8]);
bubbleSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]);


console.log("Merge Sort: ", mergeSort([4,3,2,1]));
console.log("Merge Sort", mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));

console.log("Max Stock Profit: ", maxStockProfit([32, 46, 26, 38, 40, 48, 42]));
console.log("Max Stock Profit: ", maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]));
