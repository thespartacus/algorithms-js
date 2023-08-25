function binarySearch(numArray, key) {
  var sortedArray = numArray.sort((a, b) => a - b);
  var pivot = sortedArray[Math.floor(sortedArray.length / 2)];
  
  if (pivot === key) {
    console.log(true);
    return true;
    
  } else if (numArray.length <= 1) {
    console.log(false);
    return false;

  } else {
    if (key < pivot) {
      sortedArray.splice(sortedArray.indexOf(pivot), sortedArray.length - 1);
      binarySearch(sortedArray, key);

    } else {
      sortedArray.splice(0, sortedArray.indexOf(pivot));
      binarySearch(sortedArray, key)
    }
  }
}


export default binarySearch;


// Another way of writing
// function binarySearch(numArray, key) {
//   var middleIdx = Math.floor(numArray.length / 2);
//   var middleElem = numArray[middleIdx];
  
//   if (middleElem === key) return true;
//   else if (middleElem < key && numArray.length > 1) {
//       return binarySearch(numArray.splice(middleIdx, numArray.length), key);
//   }
//   else if (middleElem > key && numArray.length > 1) {
//       return binarySearch(numArray.splice(0, middleIdx), key);
//   }
//   else return false;
// }
