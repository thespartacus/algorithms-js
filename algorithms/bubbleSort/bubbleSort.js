function bubbleSort(array) {
  var sortedCounter = array.length - 1;

  while(sortedCounter >= 1) {
    for(var i = 0; i <= sortedCounter; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    sortedCounter--;
  }

  console.log(array);
  return array;
}

export default bubbleSort;
