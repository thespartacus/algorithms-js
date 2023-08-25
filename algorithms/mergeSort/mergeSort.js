function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  var midIndex = Math.floor(array.length / 2);
  var firstArray = array.slice(0, midIndex);
  var secondArray = array.slice(midIndex);  // we don't need to pass 2nd param here as it will go to end of array automatically

  return merge(mergeSort(firstArray), mergeSort(secondArray));
}

function merge(array1, array2) {
  var result = [];

  while(array1.length && array2.length) {
    var minElem;

    if (array1[0] < array2[0]) {
      minElem = array1.shift();

    } else {
      minElem = array2.shift();
    }

    result.push(minElem);
  }
  
  if (array1.length) {
    result = result.concat(array1);

  } else {
    result = result.concat(array2);
  }

  return result;
}

export default mergeSort;
